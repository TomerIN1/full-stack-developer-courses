// functions can have return statement, but they don't havt to. 

var sum = 0; //this is a variable
function addThree() {
    sum = sum + 3; // in this case we dont have a return statement. this function is not going to reuturn anything. it will return undefined.  
}

// trying to log this function will return undefined. 
console.log(addThree())