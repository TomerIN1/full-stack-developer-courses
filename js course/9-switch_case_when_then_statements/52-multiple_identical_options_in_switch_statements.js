// sometimes you want a switch statement where multiple inputs give the same output. 
// well, that's easy enough by omitting the break statement. 

function sequntialSizes(val){
    var answer = "";
    switch(val){ //in this case we want the case 1,2,and 3 all to return the answer of low. 
        case 1: 
        case 2: 
        case 3: // since we don't have any break statement between these cases, it will just keep going to the next one automatically. 
            answer = "Low";
            break; 
        case 4:
        case 5: 
        case 6: 
            answer = "mid"
            break;
        case 7:
        case 8: 
        case 9: 
            answer = "high"
            break;
    }

    return answer;

}

console.log(sequntialSizes(2));