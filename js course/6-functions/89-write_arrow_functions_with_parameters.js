//just like a normal function, you can pass arguments to arrow functions. 

// change this function to be based on arrow function. 
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  
console.log(myConcat([1, 2], [3, 4, 5]));


//convert the function to an arrow function
var myConcat = (arr1, arr2) => arr1.concat(arr2); //in the function parenthesis add your parameters. concat = connect between 2 data types (strings, arrays, objects).

console.log(myConcat([1, 2], [3, 4, 5]));