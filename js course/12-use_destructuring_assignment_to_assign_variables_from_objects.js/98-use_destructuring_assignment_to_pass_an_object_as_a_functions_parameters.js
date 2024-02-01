//you can use destructuring assignment to pass an object as a function's parameter. 
//this is commonly used with API calls. when you are getting infromation from an Ajax request or an API request it will often have a lot more information that what you need. 
//and you can use destructuring to get it down to what we actually want to work with. 
const stats = {
    max: 56.78, 
    sd: 4.34, 
    median: 34.56, 
    mode: 23.89, 
    min: -0.78, 
    average: 35.85
}; 

//before the change
const half = (function() { 

    return function half(stats) { //we have the half function and it's getting the stats argument. so it's passing in the whole object of stats. 
        return (stats.max + stats.min) / 2.0; //but in this fuction we only using the max and min from stats. 
    }; 

})();

//after the change
const half2 = (function() { 

    return function half({max, min}) { //so instead of passing the entire stats object into this function, we can just pass in what we need. 
        return (max + min) / 2.0;
    }; 

})(); 

console.log(half2(stats)) //now, when stats get passed in, it's destructured into just the max and min variables. 

