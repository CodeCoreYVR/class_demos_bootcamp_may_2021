console.log('Hello World')

const BASE_URL = 'http://localhost:3000/api/v1'

const Question = {
    index(){
        return fetch(`${BASE_URL}/questions`)
        //by default fetch is a GET request
        //we know the path because we built the backend
        //but if we are using an external API, it is the responsibility
        //of the developer of the API to share the path with its users

        //fetch will always return a promise, and a promise
        //will always return a response object, and the response
        //object represents the response. We want the data of the actual response
        .then(response => {
            console.log(response);
            return response.json()
            //normally we want it in some sort of text format, but now we want it in json
            //res object has a method .json() that will parse the body of res into json format
        })
    },
    create(params){
        return fetch(`${BASE_URL}/questions`, {
            method: 'POST',
            credentials: 'include', //need this for cookies
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    },
    show(id){
        return fetch(`${BASE_URL}/questions/${id}`)
        .then(res => res.json())
    }
}

//Sign In AJAX Helper
const Session = {
    create(params){
        return fetch(`${BASE_URL}/session`, {
            method: 'POST',
            credentials: 'include', //need for cookies to be allowed to be sent cross-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
}

//Hacky Sign-in / "Mock" sign in
Session.create({
    email: 'js@winterfell.gov',
    password: 'supersecret'
})

//Navigation

function navigateTo(id){
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active')
    })

    document.querySelector(`.page#${id}`).classList.add('active')

    document.querySelectorAll('a.item').forEach(page => {
        page.classList.remove('active')
    })

    const navLink = document.querySelector(`a[data-target=${id}]`)
    if (navLink) navLink.classList.add('active')
}

const navbar = document.querySelector('.menu.navbar')

navbar.addEventListener('click', event => {
    const navLink = event.target.closest('a')

    if(navLink){
        event.preventDefault()
        const pageId = navLink.dataset.target
        navigateTo(pageId)
    }
})

//declare a container for the list of questions
const questionsContainer = document.querySelector('.question-list');
//Index loading questions
function loadQuestions() {
    Question.index()
        .then(questions => {
            //iterate through each question and each question will return a string item
            questionsContainer.innerHTML = questions.map( q => {
                return `
                <li>
                    <a class="question-link" data-id="${q.id}" href="#">${q.id} - ${q.title}</a>
                </li>
            `
            }).join('');
        })
}

const questionShowPage = document.querySelector('#question-show')

function renderQuestionShowPage(id){
    Question
    .show(id)
    .then(({ id, title, body, author, like_count }) => {
        questionShowPage.innerHTML = `
        <h2>${title}</h2>
        <p>${body}</p>
        <small>${like_count} likes</small>
        <small>Asked by: ${author.full_name}</small>
        <div>
        <button data-action="edit" data-id="${id}" href="#">Edit</button>
        <button data-action="delete" data-id="${id}" href="#">Delete</button>
        </div>
        `
        navigateTo('question-show')
    })

}

loadQuestions();

//Navigate to specific question show page when clicking on the question's link in index
questionsContainer.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.matches('a.question-link')) {
        const questionId = event.target.dataset.id
        renderQuestionShowPage(questionId)
    }
})


const newQuestionForm = document.querySelector('#new-question-form');
newQuestionForm.addEventListener('submit', (event) => {
    //remember that submit has some default behaviours we want to prevent
    event.preventDefault();
    //grab from DOM node
    const form = event.currentTarget
    //grab all the data from the form
    const formData = new FormData(form);
    const newQuestionParams = {
        title: formData.get('title'),
        body: formData.get('body')
    }
    Question.create(newQuestionParams)
    // .then(data => {
    //     console.log('Question created!')
    //     console.log(data)
    // })
    .then(({ id }) => {
        console.log(`Question ${id} has been created!`)
        form.reset()
        loadQuestions()
        renderQuestionShowPage(id)
        navigateTo('question-show')
    })
})
