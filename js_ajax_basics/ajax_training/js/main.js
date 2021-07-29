//AJAX - Asynchronous Javascript and XML (now mostly use JSON, so AJAJ?)

// AJAX is a set of techniques to fetch data from a server asynchronously
// without interfering with the display and behaviour of the existing page in the browser
// What thids means is that our page loads while in the backround AJAX fetches data 
//from the server and makes it available for our use

//What is JSON?
//Javascript Object Notation
//Most common format
//Way of storing and working with data in JS.
//It all contains two main things: Objects and Arrays
//JSON object keys need to be wrapped in double quotes
//and we access them the same way we learned before

//All Web browsers have a built in tool for AJAX
//Called 'XMLHttpRequest'
//This tool will do the heavy lifting for us,
//with it we establish a connection with the 'url' that we want to send or receive from

//--------------------------XMLHttpRequest-------------------------------->

//to use it, we need to create an instance of it
const students = new XMLHttpRequest();
// specify what we want to do with it
students.open("GET", "http://localhost:3000/students");
// open method accepts two arguments
//first: specify whether we want to send or receive data
//based on http verb: 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'
//second: the url the request will be sent to

students.onload = () => {
    console.log("Students: ", JSON.parse(students.responseText))
};

//up to this point we defined our request and finally we need to trigger the request
students.send();

//Departments
const departments = new XMLHttpRequest();
departments.open("GET", "http://localhost:3000/departments")
departments.onload = () => {
    console.log("Departments: ", JSON.parse(departments.responseText))
};
departments.send();

//-------------------------Axios------------------------------------------------>
const fetchDataButton = document.querySelector('#fetch-button');
fetchDataButton.addEventListener("click", async () => {
    const response = await axios.get("http://localhost:3000/departments");
    console.log("axios data: ", response.data)
})

//-----------------------Fetching data using Fetch AJAX-------------------------->
// const fetchDataButton = document.querySelector('#fetch-button');
// if(false){
    fetchDataButton.addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/departments")
        const myJson = await response.json();
        console.log("fetch data: ", myJson)
    });
// }

//--------------------------Superagent-------------------------->
superagent.get("http://localhost:3000/departments").then(res => {
    console.log("superagent data: ", JSON.parse(res.text));
})

//-------------------------XML AJAX Pokemon Example------------------------------>
const getReq = new XMLHttpRequest()

//the "load" event will be fired off when the response is back from the request
//Read the "responseText" property off of "getReq" to read the response
getReq.addEventListener(
    'load',
    function(){
        console.log(this.responseText)
    }
)

//open() initializes a request.  It takes in the following args:
//1. name of the HTTP verb
//2. api endpoint
getReq.open(
    "GET",
    "https://pokeapi.co/api/v2/pokemon/pikachu"
)

//Send req
getReq.send()

//---------------------------jQuery AJAX for pokemon api------------------------------>
// $.ajax({
//     method: "GET",
//     url: "https://pokeapi.co/api/v2/pokemon/ditto",

//     //this function will be invoked after the request is successful
//     success(data) {
//         console.log(data)
//     }
//     //or
//     //success: function (data) {
//         // console.log(data)
//     // }
// })





