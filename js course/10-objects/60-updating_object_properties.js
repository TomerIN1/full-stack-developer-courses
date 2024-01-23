// we can use dot notation to update object properties. 

// example
var ourDog = { 
    "name": "Bisli", // the property has spaces between the words. so, to get the value of these properties, we're going to use the bracket notation. 
    "legs": 4, 
    "tails": 1, 
    "friends": ['everything!']
}; 

//check 
console.log("before the change: " + ourDog.name); //result -> Bisli

//let's use dot notation to update our dog name. 
ourDog.name = "Happy Bisli" //here we access the dog name and use the assignment operator to set the name to "happy Bisli". 

//check 
console.log("after the change: " + ourDog.name); // result -> Happy Bisli
