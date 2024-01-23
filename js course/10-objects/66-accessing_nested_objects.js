// here we have an object with other objects nested inside that. 
// so in order to access sub0properties of an object you can chain together the dot or bracket notation. 

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps", 
            "passenger seat": "crumbs"
        }, 
        "outside":{
            "trunck": "jack"
        }
    }
};

// let's try to get the gloveBoxContents
var gloveBoxContents = myStorage.car.inside["glove box"];

//check
console.log(gloveBoxContents);