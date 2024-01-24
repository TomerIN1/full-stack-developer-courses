// in this lesson, we want to create a function that when you pass in a name and a property as arguments you get the property value. 
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

/*
  for (i = 0; i < contacts.length; i++){
    console.log(contacts[i].firstName)
  }
*/


function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
            return contacts[i][prop] || 'No ' + prop + ' property for this contact';
        }
    }
    return 'No such contact';
}

console.log(lookUpProfile("Sherlock", "lastName"));