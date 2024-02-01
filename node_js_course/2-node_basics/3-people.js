const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35];

// console.log(people); //when we require the console.log from the modules file, if we run the modules code we'll see the people array. 

//what if we want to import this people file into this modules file?
// module.exports = people;

//this is how we export multiple things from this file. 
//when we will open it in a different file, we'll get an object called people and we will be able to access each one of these variables from this object. 
//one way to use this object, is deconstucting this object. see how we do it in the modules.js file. 
module.exports = { //here we assign the module.exports to be an object {}.
  people,
  ages,
}