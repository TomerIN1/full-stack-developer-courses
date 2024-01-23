//a for loop can also be used to count backwards. 
// here we're initializing i to 10. 
// and in the condition we are going back to 0.
// lastly we're going to decrement i instead of increment it. 

var ourArray = [];
for (var i = 10; i > 0; i -=2) {
    ourArray.push(i);
}

console.log(ourArray); // result -> [10,8,6,4,2]

// let's do now odd numbers
var myArray = [];
for (var i = 9; i > 0; i -=2) {
    myArray.push(i);
}

console.log(myArray); // result -> [10,8,6,4,2]
