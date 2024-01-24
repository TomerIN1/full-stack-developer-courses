//as seen previously, a sonst declaration alone doesn't really protect your data from mutation. 
//if you have an object or an array, you can still mutate it even if it's declared with const. 
//there is something called object.freeze that will prevent data mutation. 

function freezeObj() {
    const MATH_CONSTANTS = { //here we create this constant with the pi in it. and right now this can still be changed. 
      PI: 3.14
    };

    try { //this is a try and catch block. this code first try what's in the first part of the block, and if there's an error, then it's going to go into the catch part and it's going to log it out. 
      MATH_CONSTANTS.PI = 99; //here we are tying to change the const declered above. 
    } catch(ex) { //er = error or exception
      console.log(ex);
    }
    return MATH_CONSTANTS.PI; //here we want to return the const. 
  }

const PI = freezeObj(); //here we are putting it into a variable called PI. 

console.log(PI);//if we run this you'll see that we console.log PI and it's 99. 

// But wait, we don't want it to change. never change. so what can we do? we are going to use object.freeze. 
function freezeObj2() {
    const MATH_CONSTANTS = { //here we create this constant with the pi in it. and right now this can still be changed. 
      PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); //we add object.freeze. so now when it tries to hange MATH_CONSTANTS it's not going to work. 

    try { //this is a try and catch block. this code first try what's in the first part of the block, and if there's an error, then it's going to go into the catch part and it's going to log it out. 
      MATH_CONSTANTS.PI = 99; //here we are tying to change the const declered above. 
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI; //here we want to return the const. 
  }

const PI2 = freezeObj2(); //here we are putting it into a variable called PI. 

console.log(PI2);//if we run this you'll see that we console.log PI and it's 99.
