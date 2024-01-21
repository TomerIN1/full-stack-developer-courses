//it's simple to assing a returned value to a variable. 

//declere a variable
var changed = 0; 

//create a chagne function 
function change(num){
    return (num + 5) / 3; //you pass in a number and it's going to return the result of this mathematical expression. 
}

//assing the upper decleted variable with the return of the change function. 
changed = change(10); // so when we call the function and add here the 10, the value that is returnd from this function is  going to be strored in thei vairable here. 

console.log(changed);