// is is common in js to iterate through the contents of an array. 

//here we have an array
var ourArray = [9,8,7,6,5];
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++){ //we start at 0. in the condition we are using the length of an object to determind how may times the loop will run. and in the end we iterate each i every time.
    ourTotal += ourArray[i]; // now we get our total which is set to 0, and using the loop we're going to keep adding to the total whatever is in the array at that index. 
}

console.log(ourTotal);

