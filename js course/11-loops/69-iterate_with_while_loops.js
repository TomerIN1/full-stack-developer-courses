// loops allow you to run the same code multiple times. 
// let's learn about while loop that runs while a specified condition is true, and stops once it's no longer true. 

// let's use while loop to add 1,2,3,4 to myArray. 

var myArray = []


var i = 0 //first we have to set what i starts off at.
while (i < 5) { // in the parathesis we add the contition
    myArray.push(i); //use push to push every loop the i to the array.
    i++; //increment i to the i variable
}

console.log(myArray);