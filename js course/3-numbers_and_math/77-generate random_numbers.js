//there is a simple way to create a random decimal number in js. 
// it's with the math.random function. 

function randomFraction(){
    return Math.random(); //use this function to create a random decimal number. the number will always be between 0 and 1. 
}
console.log(randomFraction());


// you can also generate random whole numbers. 
var randomNumberBetween0and19 = math.floor(math.random() * 20); // you can create whole number using the math.floor function. 
function randomWholeNum(){
    return Math.floor(Math.random() * 10); 
}
console.log(randomWholeNum());


//you can also generate random whole numbers within a range. 
function ourRandomRange(ourMin, ourMax){
    return math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange());


//you can use the parseInt function. it takes a string and returns an integer. 
function convertToInteger(str){
    return parseInt(str);
}
console.log(convertToInteger("56"));


//use the parseInt function with radix. the parseInt function can also be used with a radix. 
// the radix specifies the base of the number in the string. such as base 2 or base 7. a base 2 whould be binary, so that's one of the most common ones to use. 
function convertToInteger(str){
    return parseInt(str, 2); // here the 2 is = to base 2. which tells the function to convert the binary number into a number. the default is base 10 (regular number)
}
console.log(convertToInteger("10011")); // this is a binary number and we convert it to a number. since base 2 is for binary numbers we can use it in the parsInt function. 






