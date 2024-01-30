//link to the video: https://www.youtube.com/watch?v=GWq0XETTOTk&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=13
//a callback function is a fuction that we pass in as an argument and execute it later. 

/*chatGPT defenition:
A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It is commonly used in asynchronous programming, event handling, and functional programming.
While a callback function can be defined inside another function, it is not necessarily a function inside of another function. It can also be a standalone function that is passed as an argument to another function for execution at a later time.*/


//here we have a basic function
function makUppercase(value) {
    console.log(value.toUpperCase())
}; 

//let's create a callback function
function handleName(name, cb) {//this function lokking for 2 things. first is the name and allso a callback function. we reference this cb function as a parameter.
    const fullName = `${name} smith` //first let's create a fake full name variable 
    cb(fullName) //now let's take the callback function param, and then we will pass in the the nessesary arguments for this function.  

    //some more logic here
    cb(fullName)
    cb(fullName)
} 

//now we need to invoke this function. 
handleName('peter', makUppercase);//here we pass to the handleName function the name value, and the upperCase function that converting the fullname into an upperCase. so we called the upperName function from another function. 


//one we've passed this function as an argument inside of this function we can set it up however our logic requires it. so, what is the big deal here? we could do this using just one function. we can add like this more functions. let's add another one. 
function reversString(value){
    console.log(value.split('').reverse().join('')) //here we take value of a string, split it, reverse it and than join it together. 
} 

//now le't use the reversString function in our handleName function
handleName('peter', reversString);// now the output is diffetent. why? because our callback function has changed.now you understand how flexable the callback function allow you to be. 

//in addition, you can put a callback functino directly in your code. so, 
handleName('Romi', (value1) => console.log(value1.split('').reverse().join(''))) //we use the callback function, but we pass in directly a new function. this way you can use map, filter and reduce functions. 


//now, let's take a look on the event listeners and this is going to give yyou a good idea why it's so important to learn them. 
//let's imagin that in hour html file we have a button with a calss of btn. first let's access to this btn. 
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (){ //event listener is looking for the name of the event which in our case it is click event. and second is that callback function. now this function will be invoked (triggered) when the use click the button.
    console.log('Hello World')
} ) 


//another use in the callback function is the setTimeout. 
//first here is an example for setTimeout function
setTimeout(() => {
    console.log('this message will be logged after 2 secods')
}, 2000);

//now, we can add the timeout function to be as a callback function. 
btn.addEventListener('click', () => { //here we add a setTimeout callBack function where the function triggered after x time you pass to the fuction. in our case it is 1 sec wich is 1000 ms. 
    setTimeout(() => {
        first.style.color = 'red'
    }, 1000) //here we set the time  
})




