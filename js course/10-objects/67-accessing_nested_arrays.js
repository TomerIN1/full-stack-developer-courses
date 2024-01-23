//array bracket notation can be changed to access nested arrays. 
// you can see we have this array here. and inside this array are two objects. 

var myPlants = [
    { //this is the first object
        type: "flowers", 
        list: [ //list inside the object
            "rose", 
            "tulip", 
            "dandelion"
        ]
    }, 
    { // this is the second object 
        type: "trees", 
        list: [ //list inside the object
            "fir", 
            "pine",
            "birch"
        ]
    }
];

//we can combine dot notation and bracket notation to access the second tree. 
//firs let's take the myPlands. next use [1] to select the second object which is trees. next use .list to access the list of trees. lastly, use [1] to select the second element in the tree list. 
var secondTree = myPlants[1].list[1] // the bracket is for the list and the dot is for the objects. 


//check
console.log(secondTree);