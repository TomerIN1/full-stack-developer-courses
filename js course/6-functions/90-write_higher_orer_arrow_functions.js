//arrow functions work really well with higher order functions such as map, filter and reduce. 
//we'll go into more detail at a different time about map, filter and reduce. 
//but the main thing to know is that they take functions as arguments for precessing collections of data. 
//whenever one function takes another function as an argument, that's a good time for an arrow function. 

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]; 

const squareList = (arr) => { //we are going to update this function. we want to square only the positive integers in a given array. 
    const squaredIntegers = arr;
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


//add to the function arrow functions so it will work. 
//we are going to use the filter and map functions to do that. 
//but the main thing i want you to look at is the arrow functions that i'm passing in to filter and map. 
const squareList2 = (arr) => {  
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); //the squaredIntergers is going to be the arr. and we're going to filter this.  
    return squaredIntegers;                      //if you only have a single argument like this (num) the number argument, you don't need parenthesis around the argument. you can just put the argument and than the arrow. 
}                                                //first we want to filter this array so we only have numbers that are positive integers.and this is the result of the filter command (array with positive integers). 
                                                 //but after we get that new array, we want to get the square of each number in that array.so, that's where we're going to use the map function. 
                                                 //the map function takes a function as its argument. but insead of writing a full function out we can use an arrow function. 
                                                 //so we are going to pass x to the function + arrow (=>). x means every element from the array that's being passed to it. 
                                                 //map means for every element inside the array do somthing for it. 


const squaredIntegers2 = squareList2(realNumberArray);
console.log(squaredIntegers2);



