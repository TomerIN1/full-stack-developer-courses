//require express
const express = require('express');

// express app
//create an instance of an express at which we're storing in this constant. 
const app = express();

// listen for requests - here it's automatically infers that we want to use a local host. 
// in addition it's create a server like we did in the old code (const server = http.createServer((req, res) => {})
// so now we are set up a server and we are listening to it. let's start get request and send back responces. 
app.listen(3000);

// app.requestType is how you listen to different types of requests. it takes in 2 arguments:
// 1.the first argument is what path or URL you want to listen to. so if you want to listen for '/about' and respond to that you just type: '/about'. 
// 2.the socond argument is a callback function that takes in a request object and response object so that we can do something with those.
app.get('/', (req, res) => {
  // res.send('<p>home page</p>'); //use the res.send to send an html message. it also shows the status code so we don't need to manually set that. 
  res.sendFile('./views/index.html', { root: __dirname }); //here we use the res.sendFile to send an html file. we pass in the path of the file, and an object that holds the root of the file. we can use __dirname (whish is = C:\Users\use Name\Desktop\Tomer\full stack developer courses\)
});

//do the same thing to /about page
app.get('/about', (req, res) => {
  console.log('get request from:' + req.url)
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects. this is how you do redirects using express. 
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

/* 404 page. 
The "404 page" in an Express application is a crucial part of error handling.
It should always be placed at the end of the file to ensure that it is executed only if no other routes match the incoming request.
The app.use method is used to create middleware for handling all incoming requests, regardless of their URL.
By setting the status code to 404 and sending a corresponding HTML file, this middleware ensures that users receive a proper error response when accessing an invalid URL.
Placing this middleware at the bottom of the file is essential to prevent it from intercepting valid routes, and it serves as a manual way to handle 404 errors in the application.
Understanding the positioning and functionality of this middleware is important for effective error management in Express.
*/
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});


// when you compare this code with the old code, you can see that the new code is much more readable and easy to write. 
// next lesson we're going to be looking at an alternative to HTML files whereby we can inject dynamic data and content into out different templates using a view engine. 
