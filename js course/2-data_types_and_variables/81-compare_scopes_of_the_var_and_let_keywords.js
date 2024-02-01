// another major difference between the var and let keywords is that when you declare a variable with var, it is declared globally or locally if declared inside a function.
// however, let - the scope of let is limited to the block statement or expression that it was declared in. 
// so, let's look at this example here. 

function checkScope(){
    "use strict"
    var i = "function scope"; //i setted with a var here, the var keyword to function scope. 
    if (true){
        i = "block scope"; // then we're setting it to "block scope" in here. 
        console.group("block scop i is: ", i);
    }
    console.log("function scope i is: ", i); //here we get in the result: "function scope i is:  block scope" why? because the i chached in the step before. 
                                             //it was in the start equal to "function score" then it was changed by the i = "block scope"; 
                                             //in order to fix it, we need to change the first var into let. see the same function below. 

    return i;
}

console.log(checkScope());



// same function with let
function checkScope2(){
    "use strict"
    let i = "function scope"; //change var to let
    if (true){
        let i = "block scope"; //change var to let
        console.group("block scop i is: ", i); //result = black scope like declered in the if statement code block.  
    }
    console.log("function scope i is: ", i); //result = function scope like declared above. 

    return i;
}

console.log(checkScope2());



// same function with let
function checkScope3(){
    "use strict"
    //let i = "function scope"; //if we comment this line of code, what do you think will happen? 
    if (true){
        var i = "block scope"; //change let to var. if it was let, then we'll get an error outside the block. 
        console.group("block scop i is: ", i); //result = "black scope" like declered in the if statement code block. 
    }
    console.log("function scope i is: ", i); //result = "block scope" like declared above. why? because it's a var decleration.  

    return i;
}

console.log(checkScope3());