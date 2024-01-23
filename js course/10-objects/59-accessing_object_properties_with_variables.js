// bracket notation can also be used to lok up object properties using variables. 
var testObj = {
    12: "namath", 
    16: "montana", 
    19: "unitas"
};

var playerNumber = 16; // here we set the variable to 16. in this testObj, 16 is "montana". 
var player = testObj[playerNumber] //here we pass in the new variable, and use it to get the value of the property = 16. 

console.log(player)