//we can use destructuring assingment with the rest operator to reassign array elements. 
const source = [1,2,3,4,5,6,7,8,9,10];

//we want to return the array with the first two elements removed. 
function removeFirstTwo(list){

    const[, ,...arr] = list; //we add here the rest operator (...) inside an array. and to remove the first two, we have to put two commas before the rest operator with nothing in between them. 
                             //the commas says, do nothing to the first element, do nothing for the second element, everything else (rest...) put into the arr variable.
    return arr;
}

const arr = removeFirstTwo(source); 

console.log(arr);
console.log(source);

