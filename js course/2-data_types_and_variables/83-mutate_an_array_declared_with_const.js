// while you cannot reassign a variable declare with const, you can mutate an array. 
const s = [5,7,2]

function editInPlace(){
    "use strict";

    //s = [2,5,7]; --> this will return an error. but if you want to update the values of an array that was declered with const you can do that. 
    s[0] = 2;
    s[1] = 5; 
    s[2] = 7;
}

//run the function
editInPlace(s);

//print the result
console.log((s));

