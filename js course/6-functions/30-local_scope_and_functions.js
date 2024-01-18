// variables which are declared within a function as well  as the function parameters have local scope. 
// that means they're only visible from within the function. let's see an example:

function myLogalScope(){
    var myVar = 5; //if we declare a variable inside the function, this variable is only visable inside the function. 
    console.log(myVar)

}

myLogalScope(); //let's call the function. 

console.log(myVar) // but then the program is going to run this console.log that's outside of the function. it is still going to try to access myVar but when running it returns an error. 
// so in order to fix it, just delete this line of code and run the function like in the example above. 

