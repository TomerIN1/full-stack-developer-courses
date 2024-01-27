//the next few lessons will be about destructuring assignment. 
//this is a special syntax for neatly assigning values taken directly from an object to a variable. 

var voxel = {x:3.6, y:7.4, z: 6.54};

//this is the old way of assign a variable to a value in an object. 
var x = voxel.x; //x = 3.6
var y = voxel.y; //y = 7.4
var z = voxel.z; //z = 6.54

//with destructuring, there's a simpler and quicker way to assign variables fro each element in an object. here is the destructuring syntax:
const {x: a, y: b, z: c} = voxel; // variables a,b,c assing to the values from the object x,y,z. a = 3.6, b = 7.4, c = 6.54. 


//now we're going to use destructuring to obtain the average temp for tomorrow. 
const AVG_TEMPERATURES = {
    today: 77.5, 
    tomorrow: 79
}; 


function getTempOfTmrw(avgTemperatures) {
    "use strict"

    //here we will destructure the avg_temperatures object that's passed into this function.
    const {tomorrow : tempOfTomorrow} = avgTemperatures; //get tomorrow's temp and assing it to tempOfTomorrow. 

    return tempOfTomorrow
}

//check the function
console.log(getTempOfTmrw(AVG_TEMPERATURES));


//from chatGpt explanation:
//Destructuring in JavaScript is a convenient way to extract multiple values from data stored in objects or arrays.
// It allows you to unpack values from arrays, or properties from objects, into distinct variables. Here's a step-by-step explanation:

//Destructuring Arrays:
const numbers = [1, 2, 3];
const [x, y, z] = numbers;
console.log(a, b, c); // Output: 1 2 3

/*
1. To destructure an array, enclose the variable names in square brackets on the left-hand side of the assignment.
2. The variable names inside the brackets correspond to the elements at the respective positions in the array.
3. The values from the array are then assigned to the variables based on their positions.*/
//Destructuring Objects:
//Example:
const person = { name: 'Alice', age: 30 };
const { name1, age1 } = person;
console.log(name, age); // Output: Alice 30

/*1. To destructure an object, enclose the property names in curly braces on the left-hand side of the assignment.
2. The property names inside the braces correspond to the keys of the object.
3. The values from the object are then assigned to the variables with the corresponding property names.*/

//Renaming Variables:
const person1 = { name: 'Alice', age: 30 };
const { name: personName, age: personAge } = person1;
console.log(personName, personAge); // Output: Alice 30

//Default Values:
const person2 = { name: 'Alice' };
const { name2, age = 25 } = person2;
console.log(name2, age); // Output: Alice 25

