// when if statemnet is true, normally the block of code right after the if statement will be evaluated and if it is not true nothing happens. 
// but with an "else" statement an alternate block of code can be executed when it's not true.  

// in this function we have the perfect case to use else statement. 
function testElse(val){
    var result = "";

    if (val > 5) {
        result = "Bigger than 5"
    }

    if (val <= 5){
        result = "5 or smaller"
    }

    return result
}


// let's rewrite the function using else statement. 
function testElse(val){
    var result = "";

    if (val > 5) {
        result = "Bigger than 5"
    } else {
        result = "5 or smaller"
    }
    return result
}


