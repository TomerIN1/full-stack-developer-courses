/*
In Node.js, "view engines" are tools that enable the dynamic generation of HTML content by combining static HTML with data from the server.
They allow you to create templates that can be populated with data to produce HTML pages with varying content.
View engines simplify the process of rendering HTML by providing a way to incorporate dynamic data into web pages.
Popular view engines in Node.js include EJS, Pug (formerly Jade), Handlebars, and Mustache.

in this lesson we will use the 'ejs' view engines. for more detailes go to http://www.ejs.co  

what is render? 
"Render" in the context of web development refers to the process of generating the final HTML content to be sent to the client's web browser.
This involves combining data with a template (often created using a view engine) to produce a complete HTML page that can be displayed in the browser.
The rendered HTML may include dynamic content, such as user-specific information or data retrieved from a server.
*/

const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine. the app.set allows us to set 'view engine' + ejs(which is the engine name we installed).
app.set('view engine', 'ejs'); //usually all the pages related to view engine files should be in the view folder. 
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  // here we want to use this array variable, that holds objects, and we want to dynanically add it to our HTML file. 
  // now, we are passing the blogs object into the rander method, and we need to add this variable to our index.ejs file.   
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  //here instead of using res.sendFile we are using res.render which is rander a view.
  // this is how we take a view, rander it and send it back to the browser.
  // all we need to do is to day what this view is called minus the extention.
  // so instead of using "'./views/index.html'" we are now using 'index'. 
  // so now it going to find the index and then use the view engin of ejs we already set in order to rander it back to the browser. 
  res.render('index', { title: 'Home', blogs });
});


app.get('/about', (req, res) => {
  // {title: 'about'} what does it means? 
  // say for example, we want to output a dynamic value inside the title tag, and that's going to be the title of the page.
  // well, we could do that by passing though data as a second parameter inside the render method.
  // that parameter is just an object. this object is ultimately going to get sent into this ejs file that we rander. 
  // we can access therefore, any of the properties directly from this object inside the ejs file and output them. 
  // say we want to call it a title property (you can call it any name you want), then this object is being passed into the ejs file, so then we can access that property title insdie the ejs file. see example in the png 'object from app to...' 
  // the end result is looks like this - see png title_about_result file.
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
