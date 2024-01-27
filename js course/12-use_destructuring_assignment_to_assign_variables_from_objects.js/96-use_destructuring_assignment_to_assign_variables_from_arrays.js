//you can use destucturing assignment to assign variables from arrays. 
const [a, b] = [1,2,3,4,5,6]; //we're assigning the variable z and x to the first two numbers of the array 1 and 2. 
console.log(a, b);

//the difference between destructuring from arrays and destructuring from objects is that you cannot specify which element from the array to go into a variable. is is just goes in order. 
//however, if we wanted number 4 to be going to a variable, we can just do like this: 
const [z, x , , y] = [1,2,3,4,5,6]; // we assing y to 4 and add another comma after x (which we scipted on the third element)


