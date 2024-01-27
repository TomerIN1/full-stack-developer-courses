//template literals are a special type of string that makes creating complex strings easier. 
//you make them with this backtick ``.
const person = {
    name: "Zodiac Hasbro", 
    age: 56
}

//template literal with multi-line and string interpolation + insert parameters inside the string. 
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`; //you use the backtinck instead of quatation marks. 

//check
console.log(greeting);

//a chalange. 
//here we have a const 
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };

/* write fucntion that takes an array from the result object, and return this string. 
[
'<li class="text-warning">no-var</li>',
'<li class="text-warning">var-on-top</li>',
'<li class="text-warning">linebreak</li>'
]
*/

function makeList(arr) {
    const failureItems = [] //create empty array
    for (let i = 0; i < arr.length; i++){ //for each element in the list 
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`) //take each element in the list, push it to the empry array and add with it the strings. 
    }
    
    return failureItems;
}

//run the function and create a new array
const failuresList = makeList(result.failure);

//print the array
console.log(failuresList);

