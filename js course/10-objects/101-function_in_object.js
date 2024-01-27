//an object can contain a function. 
const bicycle = {
    grear: 2, 
    setGear: function(newGear){ //instead of using the function keyword and this colon... 
        "use strict";
        this.gear = newGear //The this keyword in the setGear function refers to the object bicycle2. When the setGear function is called on the bicycle2 object, this inside the function refers to the bicycle2 object itself. This allows the function to access and modify the gear property of the bicycle2 object.
    }
};

//you can write it to be shorter. 
const bicycle2 = {
    grear: 2, 
    setGear(newGear){
        "use strict";
        this.gear = newGear //The this keyword in the setGear function refers to the object bicycle2. When the setGear function is called on the bicycle2 object, this inside the function refers to the bicycle2 object itself. This allows the function to access and modify the gear property of the bicycle2 object.
    }
};

