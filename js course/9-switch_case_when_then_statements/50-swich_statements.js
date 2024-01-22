// instead of using chained else if statements, you can use a switch statement. 
// a switch statement tests a value and can have many case statements which define various possible values. 

/*
Write a switch statement which tests val ans sets answer for the following coonditions:
if 1 rerurn "alpha"
if 2 return "beta"
if 3 return "gamma"
if 4 return "delta"
*/

function caseInSwitch(val){
    var answer = "";
    switch (val) { //the switch statements starts like if statemet. you type switch and then pass the value you want to check. now we are going to compare the val into different cases. 
        case 1: /*if val equal to 1. the ":" sign is like === in if statemtns*/ 
            answer = "alpha"; //meaning if case equal 1 then the answer will be alpha. 
            break; //break means that we're at the end of that case statment, and once you break it, it just goes to the end of the switch statement and doesn't evaluate anython else in the switch statement.  if you don't have a break statement it will just run through to the next case statement automatically. without it first it is going to set the case to alpha and then it whould set the answer to beta. 
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gamma"
            break;
        case 4: 
            answer = "delta"
            break;
    }

    return answer
}



//let's test it. 
console.log(caseInSwitch(2));




