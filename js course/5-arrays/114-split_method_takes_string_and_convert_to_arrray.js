// here is how to use the split method. 
//The `split` method in JavaScript is used to split a string into an array of substrings based on a specified separator and returns the new array. The syntax for the `split` method is: 

//string.split(separator, limit)

//Where:
// `separator` is the character used to specify where to split the string.
// `limit` is an optional parameter that specifies a limit on the number of splits to be found.

//For example:
const str = 'Hello World';
const arr = str.split(' '); // arr will be ['Hello', 'World']
console.log(arr);

//here is another example. 
let myName = 'Ester The Queen'

//now le't reverse this string. 
//step one use the split method to split all the letters of the string. 
const nameSplit = myName.split('')
console.log(nameSplit); //output: [ 'E', 's', 't', 'e', 'r', ' ', 'T', 'h', 'e', ' ', 'Q', 'u', 'e', 'e', 'n']

//step two reverse the name
const nameSplitReverse = nameSplit.reverse()
console.log(nameSplitReverse); //output: ['n', 'e', 'e', 'u', 'Q', ' ', 'e', 'h', 'T', ' ', 'r', 'e', 't', 's', 'E' ]

//step three, use join to convert the array back to string
const nameSplitReverseString = nameSplitReverse.join('')
console.log(nameSplitReverseString); //output: neeuQ ehT retsE