/**
Database:
We use database to store data of whatever we want, and then we can get that data and inject into our views when we need to. 
There are two main types of databases: 
  1. SQL - tables, rows, columns. 
  2. NoSQL- collections, documents. 

NoSQL database:
A NoSQL database split up into collections (which are a bit like tables in a sql database).
each collection whould be used to store a particular type of data. 
for example, a use collection whould store user documents.
In our case, we will have a blog collection that will store blog documents. 
you can have as many different collections as you want, but the important thing to remember is that each one whould contain only one type of document. 

NoSQL document:
for our blog collection this is how a document should look like (see pic 'blog document data stracture' in public folder). 
a document is a bit like a record in a sql database. each one represents a single item of data. 
a blog document represents a single blog.
these documents are sdtored in a format that looks very similar to JSON or JavaScript Objects, which hold a series of key and value pairs.
for example, a blog document could have a title, a snippet and a body, and an auto-generated unique id to identify it as well. 

how we use database and backend?
from our code we could connect to a collection like the blogs in mongoDB, and then we could either:
  1. save document
  2. read document
  3. updated document
  4. delete document

steps we need to do in order to establish a working database that connected to our project. 
  1. create a database. In our case go to http://www.mongodb.com/cloud/atlas  
    a. we can install mongoDB on our computer locally and then deploy that. 
    b. the best way today is to use a cloud database which is already hosted for us, and it can be quite a lot easier for us to manage, so we're gonna do that. 
    c. the cloud we are going to be useing to make this database is called MongoDB Atlas. 
      c.1. first create a free account and sign in. you can do this using your google account.  
      c.2. next, build a cluster. choose the free cluster and select all the defaults right there + give it a name. in the end you'll need to wait few minutes in order for the new cluster to establish. 
      c.3. next, create a database and a collection in the database. 
      c.4. next, click on collection --> add my own data --> give the database and the collection thier names. 
      c.5. next, create a user so that we use it for database access from our code. go to database access --> create a new database user --> give it a name and a passward, select read and write to any database --> click 'add user'
      c.6. next, go back to clusters, click on 'connect' -> select 'connect your application' -> and copy the connection string and save it in your code. so, go to app.js add a const and save this string. 
  2. create a connection in our code to the database. we will use a package called mongoose to connect and interact with the database. we will install mongoose which is simmilar to prisma. it allows to to manage easily your database. 
     mongoose is an ODM library (Object Document Mapping Library). it wraps the standard MongoDB API and it provides us with a much easier way to connect to and communicate with the database. 
     it does this by allowing us to create simple data models which have database query methods to create, get, delete and updated database documents. 
     in order to use mongoose we:
      a.1. create schemas and models to hold the data.schemas defines the structure of a type of data. for example:
        blog schema:
          -title(datatype = string), required
          -snippet(datatype = string), required
          -body(datatype = string), required +
          -auto generated unique id as well. 
        this schena will define the structure of our blog documents that will be stored in the blog collection in the database. 
      a.2  create a model, based on that schema. the model is the thing that acually allows us to communicate (get, save, delete, update, etc) with a particular database collection. see pic 2 schema & models in the public folder.
      a.3. create a models folder, and create a model that will hold our blog schema. 

Getting and Saving Data:
one of the best things you can do when creating a new connection to the database is to test a get or save response. 



In this course we're gonna use the mongoDB database which is a NoSQL database. 

 */

const DbUserName = 'TomerNI'
const DbUserNamePass = '123321123321'

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose'); //require mongoose after installing. now we can use this mongoose object to connect to the database. 
const Blog = require('./models/blog'); //here we import the blog model we created in the models folder. 

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://Tomer_NI:123321123321@tnnodejscourse.eadplyd.mongodb.net/NodejsCourseTomy?retryWrites=true&w=majority";

//connect mongoose to our database. 
//get fiew arguments:
//  1.the dbURI string
//  2.option argument that will stop some deprecation warnings. it's not goint to effect who we write the code. Openweb2021!
//  since it's an aysnc task it returns a promise. so, we can use the .then .catch to have some info about the connection establish
mongoose.connect(dbURI)
  .then(result => app.listen(3000)) //this callback function will fire after the connection will complete. we take the app.listen function and use it as a callback function, so when the promise of the db connection is done, we ask from the app to start listen to the correct port.  
  .catch(err => console.log(err)); //else send the err message.

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests. 
// here we create a get handler which is gonna response to requests to att-blog. this is going to be used to add a blog to the collection. 
// we will fire a callback when that request comes in, taking the request object and the response object. 
// inside, we want to create a new instance of a blog documents and then save that to the blog's collection. 
app.get('/add-blog', (req, res) => {
  const blog = new Blog({ //here we mimic a new blog created by a user. we are using the model schema to create a new "blog". 
    title: 'Romi blog',
    snippet: 'about Romi new blog',
    body: 'more about Romi blog'
  })

  blog.save() //take the new blog we created and save it in our database. save is an async function, and we use the promise result to send it to the database collection. 
    .then(result => {
      res.send(result); //now, once the mongoose saves it to the database, the database then sends us back an object version of that new document. if you'll go to localhost:3000/add-blog you're gonna see it in our browser.  
    })
    .catch(err => {
      console.log(err);
    });
});

//this is how we retrive all the blogs from the collection. 
app.get('/all-blogs', (req, res) => {
  Blog.find() //find gets us all of the documents inside the blog's collection.  if you'll go to localhost:3000/all-blogs you're gonna see it in our browser.   
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

//this is how we retrive a blog based on his unique id. 
app.get('/single-blog', (req, res) => { 
  Blog.findById('5ea99b49b8531f40c0fde689') //when we saved a new document to the database, it's generate an unique id for this recod. then we can use this unique id to select it from the database. 
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

//NOTE!! - Up until here we used mongoose to interact with the database. but now, we need to learn how to implement the data from the database into our pages. 
app.get('/', (req, res) => {
  res.redirect('/blogs'); //here we redirect the homepage to the blogs. this is just for the perpose of this lesson. 
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

//here we in
app.get('/blogs', (req, res) => { //when a get request to see the blogs comes in then:
  Blog.find().sort({ createdAt: -1 }) //get all the blogs and sort it by the date
    .then(result => { //get the result from the database and rander it in the browser screen.
      res.render('index', { blogs: result, title: 'All blogs' }); //choose the index page, and rander the blogs also. if you'll go to the index page you'll see that we already choose the blog to rander it, so we don't need to change any of the code in the index file. 
    })
    .catch(err => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});