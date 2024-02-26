/**
we can use express router to orgenize the app better. steps:
  1. create routes folder. 
  2. in the folder create a file - blog routes. 
  3. copy all the blog requests and responses into the blog routes. 
  4. export the file. 
  5. import the file to your app file. in our case this is the line of code that we use: "const blogRoutes = require('./routes/blogRoutes');"
  6. use the imported file here: 

  "
  // blog routes
  app.use('/blogs', blogRoutes);
  "


what is MVC Approach? 
  1. stands for Model, View,Controller:
    a. models are how we describe our data structure and we use them to interact with the database. 
    b. views are where we make our HTML templates that a user will see. 
    c. controller will be the thing that forms the link between our models and our views. they're like the middlemen that use models to get data and then pass that data into the view. 
       we've already done that directly in our route handlers, but the idea of using controllers is that we just extract those handler functions into a separate controller file,
       then we can just reference those controller functions in our routes file. 
       the idea behind this is just to make our code easier to manage.we split our project into area, and then each area of file has its own job to do. 
  2. MVC is a way of structuring our code and files. 
  3. keeps code more modular, reusable and easier to read. 

using MVC approach can be helpful as you projects get larger. 

 */

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://netninja:test1234@net-ninja-tuts-del96.mongodb.net/node-tuts";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});