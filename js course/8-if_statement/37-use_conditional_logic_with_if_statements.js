// an if statement is used to make decisions in code. 


function ourTrueOfFase(isItTrue){ // the whole function takes a variable, and we chagne if that is true or false. 
    if(isItTrue /* type here the condition. so if the stuff inside these parenthesis evaluates to true, then the code within these curly braces will be avaluate or run*/){ // the keyward "if" tells js to execute the code in the curly braces under certain conditions defined in the parenthesis. 
        return "Yes, it's true"; // so, if the isItTrue variable is true, it will return "yes, it's true"
    }
    return "No, it's false" //now, if this is not true, then we'll get to the second return statement "no, it's false".
}


function trueOrFalse(wasThatTrue){
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
}

console.log(trueOrFalse(false));
