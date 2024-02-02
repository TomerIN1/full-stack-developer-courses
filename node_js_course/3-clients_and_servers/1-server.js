/**
Ultimately we want to create a website whereby the server-side code is powered by node and JavaScript. 
So, our server will be the thing listening for incomeing requests from a browser. 

How does this whole process of communication between a browser and a server work? 
on a simple lever, we type a website address into a browser and then we hit enter. 
that sends a request to the server that's powering that particular website. 
the server then looks at that request and it decides what to send back to the brwoser. 
in most cases that will be an HTML page and then that is then displayed in the browsesr, but it can also be images or css or JSON, anything coming from the server as a response.

when we type in a web address or a domain, how does the browser then know to send a request to the correct server?
there's probably milions of servers powering milions of websites, but somehow the browser magically knows to connect to the correct one. 
to answer that we need to know a little bit about IP addresses and domains. 

IP Addresses and Domains:
Ip addresses are like addresses for computers which are connected to the internet and all computers connected to the internet have a unique IP address to identify. 
now, some special computers are known as hosts, meaning the host websites on the internet, and if you create and publish a website it will be hosted on a computer somewhere and that computer will have an IP address to identify it. 
if we want to connect to a server on that host computer we need to know its IP address. 
to do it, we could then type the ip into a browser if we wanted to in the address bar to connect our server. 
Ip addresses are just a series of numbers, and they would be really hard to remember especially if you want to remember a few of your favorite different websites. 
so instead we use domain names to mask these IP addresses, and then when we type a domain name into a browser and hit enter, it will find the ip address associated with it, and then it will use that to find the computer hosting the website and communicate with that. 
this way, it can send requests and get back responses to and from it. 

GET Request:
so, when someone goes to the internet, and type something into the browser and hit enter, that is a GET request. 
it's made every time we go to a different web page either by a link of directly typing into the address bar. 
we're sending a get request to the server to get a certain resource. in most of the cases it's an HTML web page. 
there are more types of requests like post, which is normally used to send data to a server from a web form. we learn all the different types of requests later on. 

HTTP Communication:
This communication between the server and the client (the browser) is via HTTP. 
now that stands for Hyper Text Transfer Protocol, and it's just a set of instructions which dictate how communication occurs. 
it's like human communication - this is the language itself. clients and servers use the HTTP construct to do that. 


creating a Server:
In node we actually write code to create a server and listen for requests from the browser. 
now, this is totally different from a language like PHP for example where we don't have to create the server manually and we have other tools which manage that for us like Apache. 
But in Node we manually create the server which lives on the backend of our website, and it's this server that then listens for requests from the browser and then dicides what responses to send to the browser. 
In the rest of this lesson we'll be focusing on creating a local server on our computer using node, which can then be used to actively listen for requests and respond to them. 
*/

//firest we need to require the http core module from node. with this module we can create a new server. 
const http = require('http');

/*using the http.createServer that is a method that creates a server for us. in addition, we are storing it in a constant, which will stor the instance of the server in it for future usage. 
The createServer method takes two arguments in a callback function.
This callback function is going to run every time a request comes in to our server. So, say we request the home page and we go to www.xyz.com and it's send a request for the homepage.Then, this function is going to run and sent the homepage.  
Inside this function we gonna use two arguments that represent two objects:
 1.the request object (req).
   this comes loaded full of information about the request such as the full path of the requested url or the request type (GET, POST, etc).  
 2.the response object (res). 
   the response object is the object that we use to actually send a response to the use in the browser. 


in this example we create server and console.log in our server this message.
it tells us the a request made from a browser. 
we have this server now but it's not really doing anything yet, it's just floating around in our file.
it's not actively listening for requests being sent. 
to do that we have to do something else. we have to invoke the listen method. 
*/
const server = http.createServer((req, res) => {
  console.log('request made');
});

/* localhost is the default value for 2nd argument
we use server.listen to start listen to our browser. we need to pass in an argument into this:
 1.first argument is the port number, that we're going to listen to. 
 2.second argument which is going to be a local host and that argument is the host name. the default value of this argument is localhost but we're explicitly typing it out. 
 3.last argument is a callback function wich fires when we start listening, just so we know that now we're listening for requests. 
*/
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000'); //after getting this message in our server, we now know that the server is actively listening to requests. after running this code it will run up untile you want to stop the listening action using the control + c (cancel).
});

/**
Localhost and port numbers:
so, now we're listening for requests on this host and this port number. 
but what does that actually mean?

localhost:
localhost is like a domain name that we'd use in the web a bit like google.com for exammple. 
but this one, is one that takes us to a very specific IP address called a loopback IP address. 
this IP address is 127.0.0.1 and it points directly back to you own computer. 
so, that means that when we're connecting to the local host domain in a brwoser, the browser is actually connecting back to our own computer which is then acting as a host for our webstie. 
so, the host name local host means listen for requests coming to our own computer. 
and this is how we use our own computer as a host when we're developing a website. 

now, what about port numbers? 
port number represents a specific channel gateway or port on our computer that a certain bit of software our server should communicate through.
for example, on your computer you've probably got a lot of different softwares that connects to the internet and receives and sends data (outlook, skype, etc).
they will all be doing this via different port numbers to keep information separate from one another. 
so, you can kind of think of port numbers as a bit like doors into your computer through which internet communications can be made to different programs. 
now, our server also needs its own port number to communicate through. 
there are meny different values for this port number but, a common one is 3000 for local web development. 
so, as long as your port number you choose doesn't clash with a port number being used by another program is fine to use. 
when we use localhost:3000. we type the port number as well. the browser then knows to connect to our own computer via this particular port number, which is where our server is going to be listening. 

how to run this file? 
1. in your terminal type: "node + file path"
2. you'll get the message of console.log('listening for requests on port 3000'). 
3. open your browser in a second screen and type localhost:3000
4. when finish type the domain, you'll get a request back to your server and see the message: "request made"

in the next lesson we'll learn how to use the respose object in order to send response to a browser request. 
 */



