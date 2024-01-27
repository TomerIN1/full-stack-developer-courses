//Array Iteration: 8 methods - map, filter, deduce, some, every, find, findindex, foreach

//-------------------------------------------------------------------
//forEach
let arr1 = [1,2,3]
arr1.forEach(function (item, index){ //we're passing in the array and forEach item in the array it just does something. 
    console.log(item, index) //here we're passing the item and index and just going to console.log the index and the item.
}); 

//with arrow function 
arr1.forEach((item, index) => console.log(item, index));


//another example: take 2 arrays and comaine (zip) them together. 
let names = ['Alice', 'Bob', 'Charlie'];
let lastNames = ['Smith', 'Johnson', 'Williams'];

names.forEach((name, index) => {
    names[index] = name + ' ' + lastNames[index];
});
console.log(names);//output: [ 'Alice Smith', 'Bob Johnson', 'Charlie Williams' ]


//-------------------------------------------------------------------
//map - in map it takes the item that's from the array, it does something to it and then puts a new thing back in that same place in the array. 
let arr3 = [1,2,3]
const double1 = arr3.map(function(item){
    return item * 2;
})

//now in arrow function
const double2 = arr3.map((item) => item * 2)
console.log(double2); //output: [2,4,6]


//-------------------------------------------------------------------
//filter - filter is going to take an array and it's gonna check each item in the array against some kind of condition to see if it's true or false. if it's tru it's going to put the item back in the array, if it's false it's not going to put the item in the array. and each of these makes a brand new array.
let arr4 = [1,2,3,4,5,6,7,8,9,10]
const events1 = arr4.filter(function(item){ //find in a given array even numbers and create an array of even numbers. 
    return item % 2 ===0;
});

//now in arrow function
const events2 = arr4.filter((item) => item % 2 === 0);
console.log(events2); //output: [2,4,6,8,10]


//-------------------------------------------------------------------
//reduce - in reduce we're going to take an array and we'll do something and then pass the result to the next iteration, along with the next item in the array.
// this is way we're going to put result and an item in here. 
// the first time it goes to the array it's goint to have a result and it's going to SEND that result to the next iteration and then add an item. 
// the number at the end (current number in this function == 0) is what the initial result is going to be. if you don't put a number at the end like this the initial result will be the first item in the array. 
// so, when it goes through this it's the result is going to be zero then wee're going to add the first item that's one and then it's going to go through the item the array again
// and the result is now one and it's going to add the item two, so one + two is three. 
// and this goes through again there's all this three (in the result) and gonna add three and that's gonna be six. 
let arr5 = [1,2,3]
const sum1 = arr5.reduce(function(result, item){
    return result + item;
}, 0) //this is the initial first number that will be going to assign the result. whithout it, the first item here will be the first item in the given array. 

//in arrow function
const sum2 = arr5.reduce((result, item) => result + item, 0);
console.log(sum2); //output: 6; 1+2+3 = 6. 


//-------------------------------------------------------------------
//some - some means, does any item in the entire array meet a given condition, if yes then true else false. 
const hasNegativeNumbers = [1,2,3,-1,4].some(function(item){
    return item < 0;
}); 

const hasNegativeNumbers2 = [1,2,3,-1,4].some((item) => item < 0);
console.log(hasNegativeNumbers2); //output: true because on of the items in the array is negative. 

//-------------------------------------------------------------------
//every - is very similar to some, but now every number has to meet the condition, if all meets the condition then true else false. 
const hasPositiveNumbers1 = [1,2,3,4].every(function(item){
    return item > 0;
}); 

const hasPositiveNumbers2 = [1,2,3,4].every((item) => item > 0);
console.log(hasPositiveNumbers2); //output: true because all the items are positive.  


//-------------------------------------------------------------------
//find - find goes through every item in the array and checks it against the condition and if that's true it returns that item. so it's searching for a specific item in the array. 
const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const found = objects.find(function(item){
    return item.id ==='b';
});

const found2 = objects.find((item) => item.id === 'b');
console.log(found2); //output: { id: 'b' } it returns the object. if it doesn't find your item then it will return undefined. 

//-------------------------------------------------------------------
//findIndex - findIndex is pretty much just like find except we use findIndex. so now, instead of returning the actual item it's going to return the index of the item. 
const objects2 = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const foundIndex1 = objects.findIndex(function(item){
    return item.id ==='b';
});

const foundIndex2 = objects2.findIndex((item) => item.id === 'b');
console.log(foundIndex2); //output: 1. it returns the index of the object inside the array.






