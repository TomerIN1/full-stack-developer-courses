/**
this is the oldes code. you can compare the old code with the new code located as 2-app.js file. 
  

What is express and why we use it?
currently we've written all of this code down below to serve up a few different HTML pages. 
and that's fine in this case. but, if we stat adding more complex routes or handling post requests from forms and and generally adding more server-side logic, 
then it will get quite messy and hard to organized. 
Express is a framework that helps us to easily manage out routing requests, server-side logic and responses in a much much more elegant way. 
it makes our code easier to read and update and extend. 
you don't have to use express, you can do everything using raw node as we have been doing so far, but Express is really good and saves us time, allow us to write clean code and it comes with some extra features.
 */

const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log('hello');
  });
  greet();
  greet();

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });


});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
