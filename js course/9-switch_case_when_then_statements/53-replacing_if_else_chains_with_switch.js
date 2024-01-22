//sometimes it is easy to read and write switch statement than a chain of if else statements. 
//let's see an example. 

//change the following function from if else to switch. 
//before change. 
function chainToSwitch(val){
    var answer = "";

    if (val === "bob"){
        answer = "marley";
    } else if (val === 42){
        answer = "the answer";
    } else if (val === 1){
        answer = "there is no #1";
    } else if (val === 99){
        answer = "missed me by this much!";
    } else if (val ===7){
        answer = "ate nine";
    } 

    return answer
}

//after the change
function chainToSwitch2(val){
    var answer = "";

    switch(val){
        case "bob": 
            answer = "marley";
            break;
        case 42: 
            answer = "the answer";
            break;
        case 1: 
            answer = "there is no #1";
            break;
        case 99: 
            answer = "missed me by this much!";
            break;
        case 7: 
            answer = "ate nine";
            break;
    }

    return answer
}