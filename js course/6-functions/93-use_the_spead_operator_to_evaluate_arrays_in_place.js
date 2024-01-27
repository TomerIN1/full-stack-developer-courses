//the spead operator looks just like the rest operator. three dots. 
//The spread operator in JavaScript is denoted by three dots (...). It is used to expand an iterable (e.g., an array) into individual elements. Here's a detailed explanation with examples and steps to help you master it:

//Definition:
//The spread operator allows an iterable (like an array) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

//Examples:
//1. Combining Arrays:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]


//2. Copying Arrays:
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // Output: [1, 2, 3]


//3.Passing Arguments to Functions:
function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  const result = sum(...numbers);
  console.log(result); // Output: 6

/*  
Steps:
1. To combine arrays, use the spread operator followed by the array you want to expand, and then combine it with another array.
2. To copy an array, use the spread operator followed by the array you want to copy.
3. When passing arguments to a function, use the spread operator before the array name to expand it into individual arguments.
Additional Notes:
- The spread operator can be used with any iterable, not just arrays.
- It can also be used to create shallow copies of objects with the object spread syntax ({...obj}).

By understanding and practicing these examples and steps, you can master the usage of the spread operator in JavaScript.
*/