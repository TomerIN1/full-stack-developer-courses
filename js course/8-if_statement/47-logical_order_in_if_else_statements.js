// when you are using else if statements order is very important. 
//let's look on this example here.  


function thestElseIf(val){
    if (val > 10){ // first we check if the value is less than 10 and return lass than 10.
        return "greater than 10"
    } else if (val < 5) { // then we check if the value is less than 5 and return less than 5. 
        return "smaller than 5"
    } else {
        return "between 5 and 10"
    }
}

//let's pass the number 3
console.log(thestElseIf(3)) // it returns less than 10. but it is less than 5.

//so what should we do? we need to change the order. 

function thestElseIf(val){
    if (val > 5){ // once the first condition is met, it doesn't even check for the rest of the conditions. that's why it's important to think about the order. 
        return "greater than 5"
    } else if (val < 10) {  
        return "smaller than 10"
    } else {
        return "between 5 and 10"
    }
}

//check after the change
console.log(thestElseIf(3)) // it returns less than 5. 







