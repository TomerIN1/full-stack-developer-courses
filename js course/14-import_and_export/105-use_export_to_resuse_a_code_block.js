//we talked about export, but now we're going to go into more detail. 
//you export functions and variables from one file, so that you can import them into another file. 

const capitalizedString2 = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//export the function
export {capitalizedString2}; 

//we also exporting these two variables
export let foo = "bar";
export let bar = "foo";

//now we can import them into another file. 

