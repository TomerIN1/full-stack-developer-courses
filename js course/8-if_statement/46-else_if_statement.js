// if you have multiple conditions that need to be addressed, you can use else if statements. 
// it's a way of chaining if statements together. 

//a function with three conditionos
function thestElseIf(val){
    if (val > 10){
        return "greater than 10"
    }

    if (val < 5) {
        return "smaller than 5"
    }

    return "between 5 and 10"
}

// let's rewrite this function with else if statement. 

function thestElseIf(val){
    if (val > 10){
        return "greater than 10"
    } else if (val < 5) {
        return "smaller than 5"
    } else {
        return "between 5 and 10"
    }
}
