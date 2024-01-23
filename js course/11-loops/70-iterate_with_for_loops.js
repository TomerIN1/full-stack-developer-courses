// a for loop is the most common tyoe of loop in js. 
// you strart with the keyword "for"
//in the parentheses with three different item s and they're sparated by semicolons.
//   the first this is the initialization. 
//   the second is the contition
//   the third is the final expression. 

//so the initilization happens before any of the code inside the loop runs. 
//when the condition is false then we break from the loop. 
//the file expression, is what we do at the end of each iteration. in our case, in each iteration we will increment i by 1. 
//in this example, we are filling our array with the numbers 0 through 4. 

var ourArray = [];

for (var i = 0; i < 5; i++) { 
    ourArray.push(i);
} // result => [1,2,3,4]


var myArray = [];

for (var i = 1; i < 6; i++) { 
    myArray.push(i);
} // result => [2,3,4,5]

console.log(ourArray);
console.log(myArray);

//print xxx 4 times
for (var i = 0; i < 5; i++){
    console.log('xxx')
}

//print a word vertialy
var myString = "hello";
for (var i = 0; i < myString.length; i++) {
    console.log(myString[i]);
}