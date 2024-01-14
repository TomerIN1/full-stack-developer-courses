// you can concatenate strings with the + operator

//example
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

// example 2
var firstStr = "first string "
var seondStr = "second string"
var final = firstStr + seondStr
console.log(final)

//example 3
var num = 20.5
var price = '$' + num
console.log(price)


//construnctiong strings with variables
var ourName = "freeCodeCamp"
var ourStr = "Hello, our name is " + ourName + ", how are your?";
console.log(ourStr);

//concatenating strings with plus equals operator
var ourStr = "I come first. "
ourStr += "I COME SECOND"
console.log(ourStr);