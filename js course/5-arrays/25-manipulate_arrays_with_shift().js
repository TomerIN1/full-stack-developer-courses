// the shift function is very similar to the pop function. 
// except it removes the first element of the array instead of the final element. 
var ourArray = [1,2,3]
var removedFromOurArray = ourArray.shift();
//  removedFromOurArray now equals "1" and ourArray now equals [2,3]
console.log(ourArray);
console.log(removedFromOurArray);

// another example
var myArray = [['Bob', 23],['cat',4]];
console.log(myArray);
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);
console.log(myArray);