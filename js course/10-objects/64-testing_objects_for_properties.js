// you can check if an object has a property with the hasown property method. 
// let's see how to use that method where we chaeck if an object has a spesicpic property. 

var myObj = {
    gift: "pony", 
    pet: "kitten", 
    bed: "sleigh"
}; 

// now, let's create a function that check if a property in inside an object 
function checkObj(checkProp){
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else{
        return "not found"
    }
}

console.log(checkObj("gift")); //result -> pony