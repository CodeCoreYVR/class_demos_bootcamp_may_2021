//------------------------PROJECT SETUP------------------------------------------->
//------------------To create a npm project---------------------->
//Create an empty project directory
//Run nmp init to initialize a project
//Follow the prompts, and press "enter" if all is good
//at the end, type "y" and enter
//This will create a npm project with a package.json file

//------------------Create .gitignore file------------------------->
//This file will hold any information you don't want to share,
//like sensitive info or large librarie4s like node_modules
//You can use gitignore.io to generate content for the .gitignore file
//You can also: curl https://www.toptal.com/developers/gitignore/api/node,macos,linux,windows > .gitignore
//This will read, copy, and paste into .gitignore

//------------------Install express package-------------------------->
// npm i express
//this will enable us to use the express library and will create node_modules
//and a package-lock.json file

//------------------Create main project file-------------------------->
//create index.js
//this file name should match what your package.json says as "main"
//this file will hold all the information in order for our project to function

//------------------------------END-------------------------------------------------->

//-------------------Require the express library---------------------->
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

//----------------------STATIC ASSETS---------------------------------->
//Static asset: require path that's a;ready accessible through express
//In turn we will use express.static through the path
const path = require('path')

//Use 'path.join' to combine string arguments into path
//path.join('/', 'users', 'bob'); -> '/users/bob'

//The below line connects our public directory to express so that it can
//serve the browser thos images, css files, browser-side JS files, etc
//Set up a public directory for these files to reside in
//__dirname is a global variable provided by node that has the value of the path to your root directory
app.use(express.static(path.join(__dirname, 'public')));
//static asset middleware will take all the files and directories within /public
//and serve them publically with their own url

//-------------------------------COOKIES------------------------------------->
//Add body parser - we don't need to install body parser anymore, 
//express has a new method called urlencoded that we'll use instead to parse in x-www-urlencoded format
//This middleware will decode (parse out) the data that was submitted from the form
//using  the "POST" HTTP Verb

//When "extended" option is "true", it allows the data to take the shape of arrays and objects
//And puts all the info on req.body.  Without it, you will only get strings back 
//the method has other options available as well that we don't need today
app.use(express.urlencoded({ extended: true }))
//It will modify the request object given to routes by adding a property to it named body
//So request.body will be an object containing the data from our form


//-----------------------Cookie Parser---------------------------------->
//install: npm i cookie-parser
//remember to require at the top
app.use(cookieParser()); //will parse cookies and put them on request.cookies available as express properties (see express docs)
//you can still require cookies without this, but in the backend it's hard for us to read
//every time we make a request to the browser, in the header somewhere there's a cookie header that holds all the info for that cookie
//cookie parser reads the headers for us and it will parse out the cookies
//it will read it in whatever format it is, and turns it into a nice JS object for us

//-------------------------Custom Middleware-------------------------------->
//Remember, order matters! So make sure this is under the urlencoded and cookie-parser
//because it will depend on it to work properly

app.use((req,res, next) => {
    const username = req.cookies.username

    //properties set on res.locals become accessible in any views
    //almost like a global variable
    res.locals.username = ""

    if(username){
        res.locals.username = username;
        console.log(`Signed in as ${username}`)
    }
    next();
})

//-------------------Logging Middleware-------------------------------->
//install morgan in our npm project: npm i morgan
//Now require it:
const logger = require('morgan')

//initialize middleware:
app.use(logger('dev'))

//set view engine to be able to create ejs templates---------------------->
// First npm i ejs to add ejs as a dependency of your project
app.set('view engine', 'ejs');
//Create views directory to refer to for our views
app.set('views', 'views')

//-------------------Common methods for App------------------------------------->
//app.use() -> to initialize middleware
//app.engine() -> to set the view engine of express
//app.listen() -> to start the express server
//app.get() -> to listen for a GET request
//app.post() -> to listen for a POST request
//app.put() -> to listen for a PUT request
//app.patch() -> to listen for a PATCH request
//app.delete() -> to listen for a DELETE request
//app.METHOD -> METHOD is just a generic variable for any of the following HTTP request types 
//supported by express, this includes app.get and app.post
//app.set -> Used to set application variables. Used in combination with app.get to
//retrieve the set variables.  Mainly to configure application wise variables like the path
//to the Views directory or path to static files

//-----------------------------HTTP VERBS---------------------------------->
//GET -> to retreive info from our server (generalization)
//POST -> req to either add or change to our server's data
//PATCH -> Update data
//DELETE -> Remove data


//--------------------------ROUTERS------------------------------------------------>
//-----------Welcome Page------------------------------------------->
app.get('/', (req, res) => {
    //add a cookie to home page
    //convention to expire a cookie with max age
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24; //a day in milliseconds
    res.cookie('hello','world', {maxAge: COOKIE_MAX_AGE})
    res.render('welcome', {
        title: 'Welcome to my Meme Page',
        memes: [
            "https://www.loginradius.com/blog/async/static/ce430bf1882a235044353d4b4d098275/e85cb/12.png",
            "https://res.cloudinary.com/practicaldev/image/fetch/s--MOKp0Jew--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.probytes.net/wp-content/uploads/2018/01/4-1.png",
            "https://www.probytes.net/wp-content/uploads/2018/01/2.jpg",
            "https://www.probytes.net/wp-content/uploads/2018/01/20.png",
          ]
    })
})

//-----------DEMO hello_world path---------------------------------->
//first arg: path
//second arg: request handler
app.get('/hello_world', (request, response) => {
    // response.send("<h1>Hello World!!!!</h1>");
    response.render('hello_world')
})

//----------Survey page------------------------>
app.get('/survey', (req, res) => {
    console.log('Cookies:', req.cookies)
    // res.send("<h1>Survey Page</h1>");
    res.render('survey');
})

//---------Create submit for form---------------->
app.get('/submit', (req, res) => {
    // res.send("thank you")
    const fullName=req.query.fullName;
    const favouriteColour=req.query.favouriteColour;
    const favouriteDay=req.query.favouriteDay;
    const message=req.query.message;
    res.render('thank_you',{
    fullName:fullName,
    favouriteColour: favouriteColour,
    favouriteDay: favouriteDay,
    message:message
    }
    )
})

//--------------------------Sign In POST request------------------------------>
app.post('/sign_in', (req, res) => {
    // res.send(req.body) //this is possible through urlencoded
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24; //a day in milliseconds
    const username = req.body.username;
    res.cookie('username', username, {maxAge: COOKIE_MAX_AGE} )
    res.redirect('/');
})

//---------------------------Sign Out POST request------------------------------>
app.post('/sign_out', (req, res) => {
    
    res.clearCookie('username')
    res.redirect('/');
})

//---------------------------SERVER----------------------------------------------->
//--------------Start listening on our server------------------------------------->
const PORT = 3000;
const DOMAIN = "localhost" // loopback address: 127.0.0.1

app.listen(PORT, DOMAIN, ()=>{
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})
