//you can use destructuring assignment to pass an object as a function's parameter. 
const stats = {
    max: 56.78, 
    sd: 4.34, 
    median: 34.56, 
    mode: 23.89, 
    min: -0.78, 
    average: 35.85
}; 

const half = (function() {

    return function half(stats) {
        return (stats.max + stats.min) / 2.0;
    }
}) 