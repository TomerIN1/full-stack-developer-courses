// we'll do one more review with the equality operator and the strinct equality operator. 

function testEqual(val){
    if (a == b) { //the equality operator is double equal sign (==). the reason why we can't just use a single equal sign is that a it is a assignment operator. 
        return "Equal";
    }
    return "Not Equal";
}

//check the function
console.log(testEqual(10, '10')); //this is going to return true since we are using the == operator. 


function testEqual(val){
    if (a === b) { //the equality operator is strict equal sign (===). the reason why we can't just use a single equal sign is that a it is a assignment operator. 
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10, '10')); //this is going to return false since we are using the === operator. 


