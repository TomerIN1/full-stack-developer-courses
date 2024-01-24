// for a long time in js if you were going to declare a vairable you had to use the var keyword. 
// but, starting with ES6 in 2015 we can now declare variables with let and const as well. 
// over the next few lessons we will learing what let and const do that is different than var. 
// one of the things is that let does not let you declare a variable twice. 

//let's see an example. 
var catName = 'Ester';
var quote;

var catName = 'Beau'; // if we will run this code you'll see that nothing is happening. it's just allowing us to set the catName twice and declare it twice with the var keyword.


// however, if we'll chage all the var to let, you'll see an error, duplicate decleration "catName"
//let catName2 = 'Ester';
//let catName2 = 'Alina'; // this is good, because you usually don't want to declare a variable two times in the same scope. ]
                        // so, this allows your program to give you an error to tell you tat you've done somthing wrong. 
                        // this is one of the few reasons that many people only use let and const and never use var to declare variable. 

function catTalk(){
    "use strict"; // this enables strict mode which catches common coding mistakes and unsafe actions. 
                  // so, a lot of people will use "use strict" at the top of a full js file or maybe just in a function to catch coding mistakes, such as forget to declare a variable using var, let or const. 


    catName = "Oliver";
    quote = catName + "says Meow!";
}