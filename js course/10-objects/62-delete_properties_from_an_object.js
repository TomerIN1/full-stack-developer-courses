// it's simple to delete a property from an object. 
// you need to use the delete keyword. 

var ourDog = { 
    "name": "Bisli", // the property has spaces between the words. so, to get the value of these properties, we're going to use the bracket notation. 
    "legs": 4, 
    "tails": 1, 
    "friends": ['everything!']
}; 

//use the delete keyword to delete the friends from the object. 
delete ourDog.friends

//check
console.log(ourDog)
