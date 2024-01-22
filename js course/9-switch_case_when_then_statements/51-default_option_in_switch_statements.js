// let's talk about the defult option in a switch statement. 
// the default option is kind of like else in an if else statement. 
// in switch statement, what if you pass the wrong value? it is going to return an empty string. that is because the answer is set to an empty string.  
// in that case we want to return something anytime the value is not met in the switchs statement. 

function caseInSwitch(val){
    var answer = "";
    switch (val) {  
        case "a": 
            answer = "apple"; 
            break;
        case "b": 
            answer = "bird";
            break;
        case "c": 
            answer = "cat"
            break;
        case "d": 
            answer = "desk"
            break;
        default: //here we add the default. so if nothing is met with the values above, then return stuff. 
            answer = "stuff"
            break;
    }

    return answer
}


console.log(caseInSwitch("e"))
