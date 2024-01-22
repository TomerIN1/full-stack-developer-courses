// we've already seen a few example of this. 
// but you can return early from a function with the return statemt. 

function abTest(a,b){

    if (a < b || b < 0) { //this line of code is modify the function to return something before it's returning the second return. in our case, thie function will immediately exit with the value of undefined. 
        return undefined;
    } 

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}