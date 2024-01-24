// use the ternary operator in order to replace if statemenst. 
// it's simmilar to an excel if statement where the structure is: condition ? statement-if-trrue: statement-if-false; 

function checkEqual(a,b){
    if(a === b){
        return true;
    } else {
        return false;
    }
}

//let's convert it to be a function that use the ternary operator
function checkEqualTernary(a,b){
    return a === b ? true : false; // the question mark is the "if keyword"
}

// of course you will not use this ternary in real life for this case, it's just for the perpose of learning. 
// the right way to do this function is: 
function checkEql(a,b){
    return a===b;
}

