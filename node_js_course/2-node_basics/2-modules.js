/*
Sometimes we'll want to split our code into multiple different files and then import and export things to / and from theose files. 
This way, we're going to keep our code much more modular, reusable, and also much easier to maintain as well. 
we're not just dumping all of our code into one single file. 
In this lesson, you'll have two new files: (1)modules and (2)people. 
if you go to the people file here you'll be able to see some data (people array).


what if we want to import this people file into this modules file?
we can do that using a require statement, where the assign it to a variable = require('./ (the "./" means the same directory as the curr file) file_name_we_want_to_import_from_him_some_functions) 
*/ 

//const xyz = require('./people');

//console.log(xyz); output: {} it returns empty.
//console.log(people); output: return an erro because people is a file and not a variable. 
//so, just because we import a file right here it doesn't automatically give us access to things in that file. we can't do that. we can anly access them from inside the file. 
//so, what if we wanted to access people array inside the people file? we have to manually go to the people file, and use the export keyword to say the program that we allow this variables or whatever to be exported from this file into onother file. 
//so, if we'll go to the people file and type: "module.exports = 'hello'" then this hello will be available to be imported from other files. so, now if we run "const xyz = require('./people')" then the output will be 'hello'.
//so now, if we want to export people array, then in the people file we need to type: "module.export = people" and now xyz is going to be equal to this people array in the people file. and it is doesn't matter if we call it xyz and the exports called 'people' they don't need to be called the same thing. 

// const people = require('./people'); //here we get the people file. so, now we are importing the people file into the modules file. 

// console.log(people);

//here we are importing to the data variable the module.export{object} from people file. now the data is an object. 
// const data = require('./people'); 

//here we can use the object to get the people array or the ages array, and console.log in this file. 
// console.log(data.people, data.ages); 


//here we are using deconstuct object and getting people and ages arrays. whatever proerties we want to extract from the exported object.
const { people, ages } = require('./3-people');


//here we don't use the data.object, rather acessing directily to the people and ages arrays because of the destructuring. 
console.log(people, ages);

//now we've seen how to export and also import out own made files but, node.js also comes with some core modules built into it, and we can also require those as well for added functionality.
//for example, let's const os (operating system) and we are going to require the OS core module. this is built-in to node itself. and we are importing that into this file. 
const os = require('os');

//the os variable reuire the OS module which is an js object.
//here we are getting some info about our os and can use the methods of platform() and homedir() to get some info about our OS.
console.log(os.platform(), os.homedir());


//one of the most important built-in modules in node.js is the file system. let's go to the files.js file. 



