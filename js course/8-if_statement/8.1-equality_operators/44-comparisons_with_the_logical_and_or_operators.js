// sometimes you want to check if two thinsg are true at the same time.  
// for instance, you may what to each if this value is less than or equal to 50. 
// and you also want to check if the value is more than or equal to 25. 
// here we have a nested if statemenst.

function testLogicalAnd(val){
    if (val <= 50){
        if (val >= 25) { // here we have a nested if statemenst.but there is an easier way to do this. we are going to use the AND operator.
            return "Yes"
        }
    }
    return "No"    
}

// now let's use the AND (&&) operator, which will give us an easier way to write the code and get the same result. 
function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "Yes"
    }
    return "No"    
}

//print the function
console.log(testLogicalAnd(30));

// in the same way we can use the OR (||) oprerator. 
function testLogicalOr(val){
    if (val < 50 || val > 70){
        return "Yes"
    }
    return "No"    
}

//print the function
console.log(testLogicalOr(55));
