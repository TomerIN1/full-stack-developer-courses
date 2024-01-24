// this function here is called an anonymous function. 
// it doesn't have a name!
// it is assigned to this variable magic. but there's no word right before the function keyword to assign the name to the function. 
//whenever you have an anonymous function you can convert it into an arrow function. 

// a remainder - this is a ragulare function:
function change(num){
    return (num + 5) / 3; //you pass in a number and it's going to return the result of this mathematical expression. 
}

//this is anonymous function:
var magic = function() {
    return new Date();
}

//you can convert the anonymous function to an arrow function. that makes it a little quicker to write. 
//step one: delete the 'function' keyword. 
//step two: add an arrow to it. =>
//step three: if we return just one value, we don't even need the return keyword + we don't need the curly braces. 
const magic2 = () => new Date(); // this is the full function from before, but it's just really shortened up.  