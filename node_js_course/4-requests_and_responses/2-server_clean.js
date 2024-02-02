//get the relevant core modules from node.js in order to create a server and loading some file system.
const http = require('http');
const fs = require('fs');

//create a server with request and response. 
const server = http.createServer((req, res) => {

  //get some info about the user's request:
  console.log('the requested url is:' + req.url + '\n' + 'the reqeusted method is:' + req.method); 

  //set content type:
  res.setHeader('Content-Type', 'text/html');

  // routing:
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
