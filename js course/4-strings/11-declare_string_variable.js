// we've already mentioned string s a little bit. 
// but anytime you have some characters surrounded by quotation marks it's a sting. 

// exaple
var firstName = 'Robin'
var lastName = 'IN'

// sometimes you need to know how to handle strings with quotations inside of them. for example:
// we are trying to use the quotes inside of the string. 
//var myStr = "i am a "double quoted" string inside "double quotes"; 


// how to solve it? use the escape caracter. 
var myStr = "i am a \"double quoted\" string inside \"double quotes";
console.log(myStr); 


//Quoting strings with single quotes. there are more methods to solve the issue precented above. 
var myStr = 'i am a "double quoted" string inside "double quotes';
console.log(myStr)

// you can use backticks (``) and to use single and double quotes in a string
var myStr = `i am a "double quoted" string inside "double quotes" it's very nice`; 


