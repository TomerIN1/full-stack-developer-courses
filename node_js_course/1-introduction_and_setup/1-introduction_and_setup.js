/*This couse is from youtube. channel: Net Ninja. Course Name: Node.js Crash Course. 

link to video: https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=1 

Lesson name: introduction and setup. 

What is node js? 
Node.js is a runtime environment that allows you to run JavaScript code on the server side.
It was created to make it easier to build scalable network applications.
You might use it when you want to build web applications, APIs, or server-side scripts using JavaScript.
It's popular because it's fast, efficient, and allows you to use the same language (JavaScript) for both the front-end and back-end of your applications.

The role of Node.js:
The role of Node.js in a website is to run JS on the back end or server side, 
and then to handle requests coming in from abrowser. 
for example, a user might visit your website in a browser, now that browser is going to make a request to the server. 
the node server is going to run some kind of JavaScript to react to the request and it might communicate maybe with a database of files on the server, 
then it's going to formulate some kind of responce and send it right back to the browser. 
now, that reponse could be an HTML page with dynamic data embedded inside, some css and image files etc. 
introduction_and_setup
node.js is an alternative now to or the server-side languages like Python, Ruby PHP etc. 
but, there are benefits of using node over the others. 
first - no need to learn an extra language for server. 
second - can share code between front and back end. 
third - node.js ha a massive community behid it. 
lastly - huge amount of third-party packages and tools to help. 

what you'll learn? 
in this course we're gonna go from the absolute beginning:
1. how to install node and use it to run JavaScript. 
2. how to read and write files on your computer. 
3. how to create a server using Node.js to create a website. 
4. how to create an express app / website. 
5. how to use MongoDB (a NoSQL database). 
6. how to use template engines to easily create HTML views. 
7.put everything together to make a simple blog site. 

Before you start: 
1. you need to know the fondataions of JS (functions, async code, promises etc)
2. basic knowledge in HTML and CSS 

installing Node.js:
1. go to: https://nodejs.org/en/download/ and download node.js
2. you can check if you already have node. to do so, open a terminal and type: "node -v".
   v for version. so, if you'll see a number, you'll know you already have node and the number repcesent the node.js version. 
3. now, if you don't get a version then you need to install node.js. 
4. after installing Node.js you will be able to start using it in an IDE like Visual Studio or Cursor. 
5. now, open a new project and now you can start working with Node.js.


Running files through Node.js:
first let's create a variable called mario */ 
const name1 = 'mario'

//now let's console.log the name
console.log(name1); 

/*how do we run this js code on our computure? 
1.open the terminal
2.go to current directory - this is where that file exists.  
3.write: "node + full path of file" in our case it is: "node .\1-introduction_and_setup.js"
4.click enter - then you'll be able to see the code. output: "mario"
5.now you can see the result and in the terminal is acting as the console for us like we have in the browser. 


if you'll go to github and search for iamshaunjp / node-crash-course you'll be able to see all the files of this course. 
every series or lessen is going to have it's own branch in this github repo. 
*/





