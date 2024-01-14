// how to export different data types from a module?
// answer: for each one of the data type you need to to the export action. 
// here we have two data types: a list and an object. please see how we export them. 

// a list
const items = ['item1', 'item2']

// export that list 
module.exports.items

// you can use 
module.exports.items = ['item3','item4']

const person = {
    name: 'bob',
}
module.exports.singlePerson = person


