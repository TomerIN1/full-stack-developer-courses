/**
What is middleware? 
Code which runs (on the server) between getting a request and sending a response. 
the request comes in and any kind of code or function that runs between getting that request and sending a response is technically middleware. 

the .use method, is generally used to run some middleware code. we don't have to have one bit of middleware (link in the end of our app.js for 404 page) we cound have more then one piece of middleware that runs on a server. 
in the next picture - three function swhould run on the server before maybe a response is sent. see pic1 in public folder.
there are different types of middleware. the .use method runs for all requests, but also the .get is a middelware just for get requests. 

middleware runs from top to bottom in our code, and it runs that way untile we exit the process or explicitly send a response to the browser. 
if there is 3 middelware blocks of code, but after the second block a response send back to the browser, then the last block of code will not run.
so, the order of middleware is important to how it runs. 

Middleware examples:
  1. logger middleware to log details of every request. 
  2. authentication check middleware for protected routes. 
  3. middleware to parse JSON data from reqeusts
  4. return 404 pages

3rd-party Middleware:
there's tons of middleware functions (for node.js and express) already created for us. 
see in the code below the example of Morgen which is a middleware log which is better then the one we've build here.
first we install moran from nmpjs.com  

build in middleware that comes with Express. 

first let's talk about atatic files:
currently if we added some kind of static files to our product (images or CSS) then we wouldn't be able to cutomatically access that file from the browser.
if we'll try to exccess from the dev tools of the browser to our project files it blocks it and protects all of our files automatically from users in a browser. 
so, to allow the browser access to something we have to specify what files should be allowed to be accessed. 
in other words, what files should be public? we can use some ready made middleware that comes along with Express. 
 */
const express = require('express');
const morgan = require('morgan'); //here we require morgan package. 

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files. 
app.use(express.static('public')); //it means that anything inside the public folder is going to be made available as a static file to the front-end. so, we can place style.css file over there and use it. 

//this middleware logs some details out to the console for every request. remember, it's going to fire for every requests because it is in the top.
// without the next keyward the browser is goint to wait forever for a response. therefore we have to use the next() in order to pass this code and continue to the next block of code.  
app.use((req, res, next) => { //here we pass the next function to the app.use arguments. in the end, we call that function. 
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next(); //call the next function, and allow the code to continue running. 
});

//add more middleware code. this is a pointless piece of middleware but we want to demonstrate what's happening. 
app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

//we ivoke the morgan function we required above.
app.use(morgan('dev')); //we are using the option dev, but it can be tiny, short or other values you can found in the docomentaion of morgan pagckage.

//
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
