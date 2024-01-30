//link: https://www.youtube.com/watch?v=yxT1lgupUrY&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=2
//In this lessen we will learn how to get unique values from an array / object. 

//here we have an array with object. get the unique values from the category. 
const menu = [
    {
        name: 'pancakes', 
        category: 'breakfast'
    }, 
    {
        name: 'burger', 
        category: 'lunch'
    }, 
    {
        name: 'steak', 
        category: 'dinner'
    }, 
    {
        name: 'pasta', 
        category: 'dinner'
    }, 
    {
        name: 'soup', 
        category: 'lunch'
    }, 
    {
        name: 'aggs', 
        category: 'breakfast'
    }
]

//step one create variable and map to iterate all the array and get just the categories. 
const categories = menu.map((item) => item.category); 
console.log(categories); //output: [ 'breakfast', 'lunch', 'dinner', 'dinner', 'lunch', 'breakfast' ]

//step two. create a set out of this categories to get the unique values from categories. 
const categories1 = new Set (menu.map((item) => item.category)); //The new keyword is used to create a new instance of a user-defined object or one of the built-in object types that has a constructor function. In the given line of code, new Set() is used to create a new Set object, which is a collection of unique values. The Set is a built-in object type in JavaScript that allows you to store unique values of any type, whether primitive values or object references. When new Set() is called, it creates a new instance of the Set object, which can then be used to store and manage unique values.
console.log(categories1); //output: Set(3) { 'breakfast', 'lunch', 'dinner' } //the problem now it that is an object. we need to turn this back into an array. 

/*more about the new keyword:
In JavaScript, the new keyword is used to create a new instance of a user-defined object or one of the built-in object types that has a constructor function. When used with a constructor function, new performs the following steps:

1. It creates a new empty object.
2. It sets the this keyword to point to the newly created object.
3. It adds a property to the newly created object called __proto__, which links the object to the prototype of the constructor function.
4. It executes the constructor function using the newly created object as the this context.
5. If the constructor function does not explicitly return an object, the new keyword returns the newly created object.

For example:*/
function Person(name) {
    this.name = name;
  }
  
  const john = new Person('John');

//In this example, new Person('John') creates a new instance of the Person object, with the name property set to 'John'.

//back to our session, let's use the rest operator in order to convert the set back to an array. here is how to do it. 
const categories2 = [...new Set (menu.map((item) => item.category))]; 
console.log(categories2); //output: [ 'breakfast', 'lunch', 'dinner' ]


//lastly, you can add a new value to the set. the value sould be before the rest operator. 
const categories3 = ['all',...new Set (menu.map((item) => item.category))]; //here we add the 'all' category to our array. 
console.log(categories3); //output: [ 'all', 'breakfast', 'lunch', 'dinner' ]

//last part is to connet the categories to our html code. 
const result = document.querySelector('.result') // here we select the result class from hour html code. 
result.innerHTML = categories3.map((category) => { //here we iterate each unique value in our categories array, and assing it to be a button in the user screen. 
    return `<button>${category}</button>`;
}).join(''); //the .join('') here is to convert the array into string. this will change the comma of the array (,) that the user see on the screen to be empty. 

