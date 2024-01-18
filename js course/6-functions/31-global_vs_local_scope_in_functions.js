// it is possible to have both local and global variables with the same name. 
// when you do this, the local variable takes precedent over the global variable. 

var outerWear = "T-Shirt"; // this is a global variable since it is declered outside of the function. 

function myOutfit(){ // here we have a function. that's going to return outerWear, which is the variable up here. 
    var outerWear = "Sweater"; // this local variable inside the function took precedence over the global variable. 


    return outerWear; 
}

console.log(myOutfit()) // when we console.log the output, of the myOutfit function, if we didn't had the local variable the output of this function is goint to return outerWar (T-Shirt), but since we have a local variable we will see "Sweater"
console.log(outerWear); // when we console.log the global variable, then we see it is going to be the T-Shirt. 
