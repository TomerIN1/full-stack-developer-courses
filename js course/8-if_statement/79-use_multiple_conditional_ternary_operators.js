// one of the great things about conditional or ternary operators is that you can nest them within each other which gives them even more power. 
// create a function that return positive if the number is positive, "negative" if the number is negative or 0. 
function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative": "zero"; //this is an example of using nested ternary operators. 
}

console.log(checkSign(0));



