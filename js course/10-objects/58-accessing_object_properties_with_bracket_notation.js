// besides using dot notation you can also use bracket notation to access a property in an object. 
// you can use bracket notation anytime, but it is required if the name has a space in it. 

// example
var ourDog = { 
    "the dog name": "Bisli", // the property has spaces between the words. so, to get the value of these properties, we're going to use the bracket notation. 
    "number of legs": 4, 
    "number of tails": 1, 
    "friends": ['everything!']
}; 


// use dot notation to access the value of a given property. 
var dogName = ourDog["the dog name"]
var dogLegs = ourDog["number of legs"]

console.log("the dog name is: " + dogName);
console.log("he has " + dogLegs + " legs"); 