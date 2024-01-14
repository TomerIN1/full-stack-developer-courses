// the unshift() function is similar to the push() array function. 
//while PushManager() aadds an element to the end of the Array, unshift() adds an element to the beginning of the array. 
var ourArray = ['stimpson','J','cat'];
ourArray.shift(); // our array now equals ['j','cat']
ourArray.unshift('happy'); // ourArray now equals ['happay','j','cat']
console.log(ourArray);

//another example
var myArray = [['Bob', 23],['cat',4]];
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift(['yosi', 43])
console.log(myArray);
