//there are many comparison operators in js that will return a boolean of true or false. 
// the most common is the equality operator, and it is often used in an if statement. 

function testEqual(val){
    if (val % 2 == 0) { //the equality operator is double equal sign (==). the reason why we can't just use a single equal sign is that a it is a assignment operator. 
        return "Equal";
    }
    return "Not Equal";
}

//check the function
console.log(testEqual(99));

