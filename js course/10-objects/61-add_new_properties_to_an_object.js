//you can add new properties to an object using dot notation or bracket notation. 


// for this object add a new property
var ourDog = { 
    "name": "Bisli", // the property has spaces between the words. so, to get the value of these properties, we're going to use the bracket notation. 
    "legs": 4, 
    "tails": 1, 
    "friends": ['everything!']
}; 

// adding the new property to the object useing dot notation. 
ourDog.bark = "bow-bow";

// adding the another new property to the object using bracket notation. 
ourDog['color'] = "White"

//check
console.log(ourDog)