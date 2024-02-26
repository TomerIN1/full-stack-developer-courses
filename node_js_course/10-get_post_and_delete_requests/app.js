/**
Request types:
  1. GET request to get a resource. 
  2. POST requests to create new data (e.g a new blog)
  3. DELETE requests to delete data (e.g delete a blog)
  4. PUT requests to update data (e.g update a blog)

so far we used just the get request for blogs and blogs/create pages. 
in order to add more blogs, we need to add some POST requests to these pages. 
and in addition, to add the rest of the request types for these pages. 

in the public folder you can find the pic 'all_requests_types_in_our_project'. 
In this pic, we will learn the last 4 listed requests:
  1. Post new blog
  2. get the blog by id
  3. delete the blog by id
  4. put (update) the blog by id

this is a typical stracture of a simple crud application for every different data type or resource we have (blogs, users, books, authors) it might look quite similar to this kind of structure of URLs and type of requests.

Post Request:
What if a user what to add a new blog? then, he'll add a title, snippet, body and then click submit to add this new blog to the website. 
at this point, we need to:
  1. fire a post request to the server with all of this data included in the post request.
  2. then on the server we can handle that post request, we'll take all of this data, create a new instance of a blog document useing the blog model we've created.
  3. add the submited data to that instance.
  4. save that document to the database.
  5. return the data from the database back to the browser. 
  for full code go to the line in this file that start with 'app.post('/blogs', (req, res) => {' 


first step:
  1. go to the 'create' page in the view folder. over there we use the page to send a post reqeust. add action, method and name in the page itself. now let's move to the server. 
  2. we add in this file, a post handler that will save the new post sended in the request.  

        app.post('/blogs', (req, res) => {
        // console.log(req.body);
        const blog = new Blog(req.body);

        blog.save()
          .then(result => {
            res.redirect('/blogs');
          })
          .catch(err => {
            console.log(err);
          });
      });

  3.in order for this code to work, we need to add some midleware. add the line: "app.use(express.urlencoded({ extended: true }));" it's not mandatory, but an option. it takes all the url encoded data that send with the request and it passes that into an object that we can use on the request object. 


Route Parameters:
the variable parts of the route that may change value: 'localhost:3000/blogs/:id' in this case it's the ':id' route parameters.
the definision to route parameters is: the part of a route that are variable of could change, depended on the blog or any other object we want to get. 

in the index file on the views folder, we can get all of our blogs, each blog has a unique id, and we can use this id as a route parameter. go to index and read. basically, in the index, we created a dynamic request so when a user click on a blog, it goes to the database and place the unique blog id in the url. now we need to hanel it in the app.js. 

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
    });
});

delete request:
we want to be able to delete blogs from the front end. put a delete button and use event listener to delete the blog. we add this button in the details page.  

 */

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

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
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/blogs', (req, res) => {
  // console.log(req.body); when write 'req.body' it gives you the name=body content from the request that we added in the create file. 
  const blog = new Blog(req.body); //here we create a new blog using the body we get from the request and save it in the database. 

  blog.save() //after saving the blog in the databse, we use aysnc function to send a response that redirect the body of the blog back to '/blogs' url. 
    .then(result => {
      res.redirect('/blogs'); //after click on submit, we redirect the user back to the main blog page to see that his new blog is published in the blog page. 
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id; //here we get the id of a specific blog from the url that was send a request. 
  Blog.findById(id) //based on the id, we go to the database to find the correct blog in the database. 
    .then(result => {
      res.render('details', { blog: result, title: 'Blog Details' }); //in the end, we rander the blog data in our browser. the blog will be randered at the details view. go now to details file in the views folder. 
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});