// scope refers to the visibility of variables. 
// variables which are defined outside of a function scope have global scope. 
// global scope means they can be seen everywhere in your JS code. 


// Declare your variable here
var myGlobal = 10; // since this is set outside of a function, we can see it anywhere in the while code. even inside of a function. 


function fun1(){
    var oopsGlobal = 5; // with var then it remains in the scope of this function. wihout var it becomes global and can be access by fun2 function. 
} 


function fun2(){
    var outPut = "";
    if (typeof myGlobal != "undefined") { // in this if statement, we are checking if the type of myGlobal does not equal "undefined". so it will not equal undefined if it has been defined and the program knows about the variable. 
        outPut += "myGlobal: " + myGlobal; // since this function can access the myGlobal variable. 
    }
    if (typeof oopsGlobal != "undefined"){
        outPut += "oopsGlobal: " + oopsGlobal 
    }
    console.log(outPut);
}

fun1();
fun2();


