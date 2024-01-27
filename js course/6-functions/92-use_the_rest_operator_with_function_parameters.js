//the rest operator allows you to create a function that takes a variable number of arguments. 
//the rest operator is three dots(...). 

const sum = (function(){
    return function sum(x,y,z){ //this inner function takes 3 aruments and it's summing them. 
        const args = [x,y,z]; //first it's converting these x,y,z into an array called args. 
        return args.resuce((a,b) => a + b, 0); ///then it's reducing them. so, it's summing them all up here and then returning the results. 
    }
})();

console.log(sum(1,2,3)); //output:  1 + 2 + 3 = 6;

//now let's use the rest operator here. 
const sum2 = (function(){
    return function sum(...args){//with this rest operator dot, dot, dot it will convert everything that's passed in into one array and the array is called args. 
        //const args = [x,y,z]; //so now, we don't need this line anymore. 
        return args.resuce((a,b) => a + b, 0); 
    }
})();


//Now, let's explain the reduce process in this context:
//1. The sum2 function uses the rest parameter ...args to gather all the arguments passed into an array called args.
//2. The reduce function is then called on the args array.
//3. The reduce function takes two parameters: a callback function and an initial value (in this case, 0).
//4. The callback function takes two arguments, a and b, representing the accumulator and the current value being processed.
//5. The callback function adds the accumulator a to the current value b, and the result becomes the new value of the accumulator for the next iteration.
//6. The reduce function iterates through all the elements of the args array, performing the specified operation and returning the final result.

//In this specific example, the reduce function is used to sum up all the elements in the args array, effectively calculating the total sum of the numbers passed to the sum2 function.


console.log(sum(1,2,3,4,5,6)); //you can pass in how many number you want.




