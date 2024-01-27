//the original name in the course is: "write concise object literal declarations using simple fields"
//ES6 added some nice support for easily defining object literals. 

const createPerson = (name, age, gender) => { //this is an arrow function. it takes in three variables, and it's going to return an object. 

    return{ //the object have a series of key value pairs where the key is the name, age and gender and the values are teh passed in variable names. 
        name: name, 
        age: age, 
        gender: gender
    };

};

//check:
console.log(createPerson("Zodiac Hasbro", 56, "male"));


//we can even make it better, it the variables and the passed values are the same
const createPerson2 = (name, age, gender) => ({name, age, gender});//this way js knows that it's going to return this object. and it's going to have 3 key value paris. 


//check:
console.log(createPerson2("Zodiac Hasbro", 56, "male"));

