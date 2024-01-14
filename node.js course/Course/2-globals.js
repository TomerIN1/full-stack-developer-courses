// CommonJS, every file in node.js is a module (by default)
// Modules - Encapsulated code (only shre minimum)

/*
const tomer = 'tomer'
const shira = 'shira'

const sayHi = (name)=>{
    console.log(`Hello there ${name}`)
}

sayHi('Romi')
sayHi(tomer)
sayHi(shira)
*/

/* 
now whouldn't it make sence if the names whould be seperate as well 
as this function or the future functions that we're going to create 
whoud be in separate files? 

and then we can access them all thourghout the application?
and that way of course we whould have smaller files and more structure to our application. 
and that is exactly what the modules allow us to do. 
*/


// NOTE!!: THE NAMES AND THE sayHi function is in the following new files (modules).
// names goe's to the names.js file
// function goes to the utils.js file