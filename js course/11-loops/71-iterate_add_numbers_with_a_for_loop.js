// loops don't just have to increment one at a time. 

// let's create even numbers array
var ourArray = [];
for (var i = 0; i < 10; i+=2){ //instead of incrementing i by 1, we're incrementing i by 2.
    ourArray.push(i);
}

console.log(ourArray);

// let's create odd number array
var oddNumbersArray = [];
for (var i = 1; i < 10; i+=2){ //instead of incrementing i by 1, we're incrementing i by 2.
    oddNumbersArray.push(i);
}

console.log(oddNumbersArray);


