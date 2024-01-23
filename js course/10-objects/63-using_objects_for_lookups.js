// objects can be thought of as a key value storage like a dictionary. 
// you can use an object too lookup values. 

// in this case we have switch statement that returns certain values. 
function phoneticLookup(val){
    var result = "";

    switch(val){
        case "alpha":
            result = "adams";
            break;

        case "bravo":
            result = "boston";
            break;

        case "charlie":
            result = "chicago";
            break;

        case "delta":
            result = "denver";
            break;

        case "echo":
            result = "easy";
            break;

    }

    return result
}

//we can replace this swich statemnt with an object. and use the object for lookups instead of the switch statement.

function phoneticLookup2(val){
    var result = "";

    var lookup = {
        "alpha":"adams", 
        "bravo":"boston",
        "charlie":"chicago",
        "delta":"denver",
        "echo":"easy"
    }; 

    result = lookup[val]; 

    return result
} 

console.log(phoneticLookup2("alpha"))




