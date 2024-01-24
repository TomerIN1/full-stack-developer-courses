//const is another way to declare a variable. 
//it has all the features of let but it's also read-only. 
//you can't reassign a const. 

function printManyTimes(str){
    "use strict";

    var sentence = str + "is cool!"; // first we declare the sentence to be the string "is cool!"

    sentence = str + "is amazing!"; // then, it's reassigned to be the string + "is amazing!"

    for (var i = 0; i <str.length; i+=2){
        console.log(sentence); 
    }
}

console.log(printManyTimes("freeCodeCamp"));


//but, if we change the var to const. this can be very helpul to prevent you from accidentally making mistakes later. 
function printManyTimes(str){
    "use strict";

    const SENTENCE = str + "is cool!"; // var changed to const. A lot of people make the value of the const variable name in upper case.  

    sentence = str + "is amazing!"; // then, it's reassigned to be the string + "is amazing!"

    for (var i = 0; i <str.length; i+=2){
        console.log(SENTENCE); 
    }
}

console.log(printManyTimes("freeCodeCamp")); //result = error. why? because you can't reassign a const variable another time like you can do for let and var. 