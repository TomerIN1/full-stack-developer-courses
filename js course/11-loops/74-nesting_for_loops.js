// if you have multimensional or nested array you can use nested for loops to access all the array elements. 
// we have a nested array. 
var nestedArray = [[1,2],[3,4],[5,6,7]];

// now let's create a function that multiply all elements in the nested arry
function multiplyAll(arr){
    var product = 1; //set the first value to 1; 

    for (var i = 0; i < arr.length; i++){ //this will iterate every small array inside of our array. the length is equal to 3. 
        for (var j = 0; j < arr[i].length; j++){ //we use j because j is after i. the condition now takes each nested array and check his length. in the end it's incremented to our final stage.  
            product *= arr[i][j] //the i references the outer array, and the j references the inner array within what we're passing in. 
        }
    }

    return product
}


console.log(multiplyAll(nestedArray));
