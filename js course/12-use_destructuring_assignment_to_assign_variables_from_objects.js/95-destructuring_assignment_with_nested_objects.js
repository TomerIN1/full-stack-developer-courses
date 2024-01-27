//we can also use destruncturing assignment to assign variables from nested objects. 

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
//this is the older way. 
const lowToday = LOCAL_FORECAST.tomorrow.high;

//use destructuring
function getMaxOfTmrw(forecast){
    "user strict"; 

    const  { tomorrow : { high : maxOfTomorrow}} = forecast  // we destruct here twice. one time for the value of tomorrow and second time for the value of high inside tomorrow.

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));