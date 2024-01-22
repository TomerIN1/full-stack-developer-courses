// here's a little trick when you want a function to return aboolean, a true or false value. 
function isLess(a,b){
    if (a < b){
        return true
    } else {
        return false
    }
}

//rewrite the function better. 
//you may remember from before the all comparison operators return a boolean true or false value. 
//so, instead of using this if statement, we can just delete all the if statement. 
function isLess(a,b){
    return a < b; //we can just return the result of this. so, this is going to be true or false. and we can just skip that whole if statement logic and just return this.  
}


//check
console.log(isLess(10,15));