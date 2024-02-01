//in order to create more flexiable functions you can use default parameters. 
//the default parameter kicks in when the argument is not specified or is undefined. 
//so, for instance, with this increment function we want to change it. 

const increment = (function () {
    return function increment(number, value = 1){ //look at the value = 1. if a number pass in insead of value 1 then it will thak the value that was passed in, but if a value did not passed in (which is optional value) then the defalt will be 1.
        return number + value;
    };
})();

console.log(increment(5,2)); //we want to change it so you can pass in two arguments the 5 and 2 to increment by 2. 
console.log(increment(5));// or you can just pass in the one argument, the 5 if you want to increment by 1. 