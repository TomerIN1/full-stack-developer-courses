//get the relevant core modules from node.js in order to create a server and loading some file system.
const http = require('http');
const fs = require('fs');


/**
let's talk about the req and res objects and how to use it. 

1.req (request object):
  the request (req) object holds a lot of infomration about the request that the user sends from the browser.  
  you can select from the req object many things and then to use them in order to complete your responce. 
  for example, the req.url gives you the full path of the requested url.
  so, if the url ends with '/about' or '/blog' then you will know how to heldel this requests.
  it also holds the request type (get, post, delete).  


2.res(response object):
  we also have access to the response object, which is what we use to send a response to the browser. 
  wihtout response the user will not be able to see any page on his screen. we're using the req with three steps:

  step 1 - response headers:
  the first thing you want to establish. response headers give the browser a little bit more information about what kind of response is coming back to it. 
  for example, what type of data we're sending back is it text? HTML? JSON? 
  In addition, we can also use the response headers to do things like set cookies. 

  step 2 - the content and type your are sending back to the browser. 
  
  step 3 - use the req.end to close and end the response, which also send it back to the browser. 
   

 */

//NOTE: every time you change the code, you need to restart the server by press control + c and then node file path. without restarting the server the changes that where made in the code will not get effected. 
const server = http.createServer((req, res) => {
  // console.log(req); //this line of code will send us all the mothods and values related to the req object. 

  //req.url gives you the full path of the url or just the end point of the path. req.method give you the type of the request (get, post etc). in our case the method is the get request. 
  console.log('the requested url is:' + req.url + '\n' + 'the reqeusted method is:' + req.method); 

  // set header content type. 
  // we use the res.setHeader method and pass in the content type and the type of the content. in our case we response with HTML. 
  // if you'll go to inspect --> network --> headers you'll be able to see the ontent type and the request type (get). 
  res.setHeader('Content-Type', 'text/html');

  // res.write('<p>hello, ninjas</p>'); //here we are using the res.write method to type some HTML code and write it back to the browser. 
  // res.write('<p>hello again, ninjas</p>');
  // res.end(); //this command is very important. when the responce or block of code is done, use the res.end to end or close the reponse. 

  /// send html file - returning HTML pages
  // the first thing is to create a folder that holds all the html files.
  // you can view the home page in the views file --> index.html. 
  // now, let's upload this page: we are using the fs.readFile method and we pass the path and a callback function when we've read that. if there is an error log it to the console if there is not an error then send it back to the broswer. lastly use res.end to end your responce. 
  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end(); //we need to end the request in all of our block of code. for error and for the data. 
  //   }
  //   //res.write(data);
  //   res.end(data); instead of useing the res.write method, here we just pass into the end mothod the data directly and it words the same. 
  // });


  ///the upper method of sending every one of the page is not efficient. 
  //so, what we can do is to use the switch --> case --> break function in order to dynamically change the request based on the root of the page (req.url)
  //so, if the url ends with '/about' then switch and response with to the about HTML page, if the url ends with '/blog' then switch and response with the blog HTML page. 

  // routing
  let path = './views/'; //create basic root path to all your html files. every time the switch will change the page, the root of views will stay the same.
  switch(req.url) { //use the switch the get the req.url final root. so, for example if the page is www.xyz.com/about you'll get the '/about' end root. 
    case '/': //when the case is homepage which the req.url sends as '/' then 
      path += 'index.html'; //firs add to the root path the index.html to GET the final html page you want to send back to the browser. 
      res.statusCode = 200; //for res.statusCode pelase go to the end of this doc to see more theoretical information. here the status code is 200 which means we got the homepage and everything is ok.  
      break; //end the code here, this is the protocol of using the switch. if you need more informations go to: '\full stack developer courses\js course\9-switch_case_when_then_statements file. 
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us': //this is how you do a redirect. 
      res.statusCode = 301;  //set this status code. 301 means that the result yo're trying to access has been permanently moved. 
      res.setHeader('Location', '/about'); //use res.setHeader and pass the location and the full path to the page you want to redirect to. 
      res.end(); //we do need to end the response. since we are usinge the response object here. 
      break;
    default:
      path += '404.html'; 
      res.statusCode = 404; //here the status code is for error 404 page not found, meaning that that resource does not exist. 
  }

  // send html
  // now, after geting the requested url and creating select the relevant HTML page to send it back to the browser as requst. 
  // we are using the fs.readFile + the relevat path to send a response back to the browser. 
  // now, every time the user goes to a new page, and send his request with req.url we create for him the relevat path and return the correct HTML page as a response back to the user's browser. 
  
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  }); 



}); //this is the end of the http.createServer method. 

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});


/**
Status Codes:
Def: Status codes describe the type of response sent to the browser and how successful the request was. 
there's many different status codes for loads of different scenarios, but here's some common ones:
  1. 200-ok: means that everything is ok with the request. 
  2. 310 - resource moved: means the resource was moved permanently somewhere. 
  3. 404 - not found: you've probably seen loads of times, it means that the file is not found. 
  4. 500 - internal server error: means some kind of internal server error. 

  there are more status codes but they are typically all in either a 100, 200, 300, 400 or 500 range. 
  * 100 rage - informational responses. 
  * 200 rage - success codes. 
  * 300 range - codes for redirects. 
  * 400 rage - user or client error codes. 
  * 500 rage - server error codes. 
  
we can add status codes to our responses. 
to set the status code of a response is actually really simple. 
all we need to do is take the response object and and then use a property called status code and set it equal to something. 
for example 200 if everything is ok. 

code: res.statusCode = 200; 

now, at the minute we're setting this status code right here inside the read file. 
but, this will send the same status code for all the different pages. we want a status code for every page on it's own. 
 */


/**
Redirects:
Say we have a website and we had a page where we used to have the URL "about-me" but then later on we decided actually it should probably be just "about"
so, we've changed the url handler from "about-me" to "about". 
internally we can convert it from "about-me" to "about". but, what about users that already have a link to the old "about-me" and now they want to find it. 
currently, without the redirect, the status code of this page will be 404.
in order to solve it, we can use redirect.  
 */

/*
this way of working right above using switch and finding out the request URL and all that kind of jazz, that is fine. 
but, as your website get a little bit bigger and slightly more complex for example dealing with many different requests URLs, different types of requests and database logic, 
that can get a little bit messy and hard to maintain with our current code. 
fortunately, there is a third party package called 'Express' which can help us manage all of this in a much easier and a more elegat way. 
it is important to learn this lesson in raw node and not Express, because it's very important to understand what goes on under the hood rather than just jump right into a framework, click your fingers and let it do all the magic. 
and also, this knowledge we've built up will actually make learning Express a bit easier too because we kind of know what's going on under the hood. 
from the next lesson, we are going to use the Express package to handle all of our routes, requests and responses later on in this course.  
*/
