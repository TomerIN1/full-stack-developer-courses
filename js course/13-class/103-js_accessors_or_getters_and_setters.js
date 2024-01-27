//Getters and setters allow you to define Object Accessors (Computed Properties)

//setter
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.language;


  //setter
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.language;

  //Why Using Getters and Setters?

    //It gives simpler syntax
    //It allows equal syntax for properties and methods
    //It can secure better data quality
    //It is useful for doing things behind-the-scenes
