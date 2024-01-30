// in computure science a cue is an abstract data structure where items are kept in order. 
// new items can be added to the back of the cue and old items are taken off from the front of the cue. 
// we're going to simulate that right now. some of the functionality of a cue using this nextInLine function. 
// The purpose of this is to show that in this nextInLine fuctnion you can add an item to the array that's passed in. and then it's going to return the first item on the list that were got out from the list.  

function nextInLine(arr, item){
    
    arr.push(item); //push the item to the end of the array. 
    return arr.shift(); //this will return the first value of the arr array. shift moves the first item and returns that first item.
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); // This JSON.stringify is just a way to change an array into a string. that can easily be printed out to the screen. 
console.log(nextInLine(testArr, 6)); //this function will add 6 to the array, drop 1 from the arry, and return the value we droped from the array. 
console.log("After: " + JSON.stringify(testArr));

