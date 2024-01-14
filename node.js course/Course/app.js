// add require to select the names from the 3-names file module we've already set in this file. 
const names = require('./4-names');
const sayHi = require('./5-utils');

// get itmes from alternative flavor
const blabla = require('./6-alternative-flavor');
console.log(blabla);
console.log('\n');

// run say hi function. export the names and the function from the module and then use it in your app. 
sayHi('Romi');
sayHi(names.tomer);
sayHi(names.shira);
console.log('\n');

// you can run full file / module with require too. the file 6-mind-granade.js holds a single function. let's call it
console.log('mid-granade file:');
require('./7-mind-granade');
console.log('\n');

// now let's take a look on the os build-in module. 
// this module is good for interacting with operating systems as well as the server.
console.log('os build in module');
 const os = require('os');

// to access to the functions of the os just type os.func. let's learn some things about os. 
// info about current user - userInfo function.
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

// get current os
const currentOs = {
    name: os.type(),
    relese: os.release(),
    totalMem: os.totalmem(), 
    freeMem: os.freemem(), 
}
console.log(currentOs);



