/*in node we get access to a global object with several different methods and properties attached to it that we can use out of the box. 
this is a bit like the window object when we work with JS inside a browser. 
the window object inside the browser is the browser's global object and it has methods like set timeout, alert and all that kind of jazz. 
if you type 'window' in the console of the browser, you can use all of those methods and properties out of the bex inside the browser. 
the methods are already connected to the window object, so you don't need to type: 'window.method_name' rather just the 'method_name'.
And this is the same case like you have in the global object of node.js. 
*/


const speak = () => {
  console.log('hello, ninjas');
}

speak();

// Global Object

// console.log(global); output: all the methods that are available to us inside of the gloab object of node.js. 

// global.setTimeout(() => { //where we call to the gloabl.method_name(setTimeOut) and we can use it. 
//   console.log('in the timeout'); 
// }, 3000);


setTimeout(() => { //same as window, we don't actually have to explicitly type global, it's just available to us out of the box. 
                   //the setTimeOut method allows you to run a function once after three seconds. 
  console.log('in the timeout');
  clearInterval(int); //the clearInterval method we pass in the interval we want to stop (which is the int interval below this block of code). what will happen is that the int interval will run every 1 secods, up untile the timeout will run the clearInterval and stop the execution of the int setInterval. 
}, 3000);

const int = setInterval(() => { //the setInterval method allows you to run a function every x time you set the interval. in our case run 'in the interval' every 1 second. 
  console.log('in the interval');
}, 1000); //this code will run forever. if you want to cancell the run, press on the keybord ctrl c (cancell) and it will stop running the file. 


//let's see more things available for us in node.js. that is 2 properties. 
console.log(__dirname); //allow you to see the full directory path of the current folder.  
console.log(__filename); //allow you to get the absolute path of the folder with the file name added on as well. 

// no access to DOM methods
console.log(document.querySelector); //this code will run in the browser and frontend. but, it can't run without the window object. therfore, some of the functionality of the window is not avialable in the server and the opesite. 
