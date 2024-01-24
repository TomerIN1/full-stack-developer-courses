// let's talk about do while loops. 
// first let's look at a while loop. 

var myArray=[];
var i = 10;

while (i < 5) { // this while loop first checkes the condition before it runs any code within the loop. 
    myArray.push(i);
    i++;
} // in this case this while loop will not work since the i set to 10 and the while loop checkes if i (10) is < 5, which is not true. 

console.log(i, myArray); //result = []

// a do while loop will always run at least one time and then it will check the condition. 
do { //we add there the keyword "do"
    myArray.push(i); // now this line of code will run one time before it check the condition. 
    i++;
} while (i < 5 )

console.log(i, myArray); //result = [10, 11]. 10 for i and 11 for i++. then it breakes since i(10) < 5 is false.  


