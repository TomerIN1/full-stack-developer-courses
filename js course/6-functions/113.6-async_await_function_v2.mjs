/*link to the video: https://www.youtube.com/watch?v=li7FzDHYZpc
title:  Javascript Promises vs Async Await EXPLAINED (in 5 minutes) - by Roberts Dev Talk. 

in this video I'll show you what js promises are. 
why we need them, how to use the special .then() and .catch() methods
and then how to convert the same code to using the much need to async and await keywords. 

when dealing with simple types in js such as strings and numbers our code executes sequentially we can assign a string a number and then comine the two values together straight away. 
however, when writing real world code we often make calls to databases, open files and speak to remote apis over the internet. 
now, longer running tasks like this will usually not return the results straight away. 
the will rather return a promise. def: the promise object represents the eventual completion (or failure) of an asynchronous operation and it's resulting value.

if this sounds a little bit hard to understand maybe we can imagine it as a real world scenario. 
imagine you are at a restaurant having dinner and you ask the waiter to bring you another cup of cofee. 
the waiter promises to come back with your coffee. however you can't drink it at that point, you have to wait until he returns with your coffee and the promise is fulfilled. 

this is the same sort of concept in JS. 
if for example you request some information from a remote api then you will be immediately given a promise that taks will eventually either complete or fail. 
it's not untile sometime later the promise itself is actually resolved or rejected. and you can use a result of that promise. 

promise example: */
const whereIsMyCofeeOrder = function (orderId) {
    return new Promise((resolve, reject) => {
        coffApi.checkStatus(orderId, (error, coffeeStatus) => {
            if (error) {
                //promise fails
                reject(error)
            } else {
                //promise is fulfilled
                resolve(coffeeStatus)
            }
        })
    })
}; 


/*
let's have a look at an example in js. 
Now imagine you are building as app that suggested things to do when you are bored. 
so you'll be using the board api, which just returns random suggestions of things you can do along with a number of participants required. 
let's just keep it really simple, by going to the api, getting a suggested actiity and then logging out the activity to the console. 

in this example we're using the axios request library and the get method returns immediately but that doesn't mean that the request has finished processing. 
what we have is a promise, that the request will be fulfilled in the future. */

//import axios from 'axios'
//let response = axios.get('https://www.boredapi.com/api/activity')
//console.log(`you could ${response.data.activity}`)

/*
so, this code will fail because the response object is not what we're expectiong.
so, the data and activity properties do not exist. 


so, is there any way for us to get access to the result of the request and run code when it returns? 
well, thankfully yes, because js gives us a couple of ways to wait untile a a task is finished and use the result or catch any erros. 
the first way is by using a couple of special methods on the promise object. 
the first one is called .then - then is called when the task completes as a parameter it receives the result of the taks. 
and the .chach method is called if anything goes wrong while processing our request and this receives the error that occurred. 

let's replace the upper code ues the axios request library and call the get method. 
now because get returns a promise object, we can immediately chain on the .then method. 
inside our .then method we'll log out to the consle the suggested activity from the api. 
then after this we can chain on the catch method. this will be called if anything goes wrong while precessing our request. 
now we run this and see that our console log executes in the right place. 
*/

import axios from 'axios';
axios.get('https://www.boredapi.com/api/activity')
    .then(response => {
        console.log(`you could ${response.data.activity}`)
    })
    .catch(error => {
        console.error(`ERROR! ${error}`)
    });

console.log('why am I here?')

/*now change the http call to 'https://httpstat.us/404' - this will geos into the catch and send an error. 
this is really useful for testing different status codes and we'll just request a 404 not found error. 
we can run this again and see that our error is neatly caught by our catch method and printed out to the console. 

note! any code placed after this promised chain will be executed immediately
so, if we put a cosole log here at the bottom we'd expect it to be written out after our request returns but actually it gets printed out first.(console.log('why am I here?')) 
this is because only the code inside the .then and catch methods is executed after the request returns. 

now this workds fine, however as you can see the code isn't particularly nice to look and if you had a lot of complicated code inside your methods things whould soon start to get quite not readable. 
so, what we need realy is a way of receiving the results of our promises sequentially just as if we were dealing with simple types like strings and numbers.

and this is were the await keyword comes in. def:
"The await operator is used to wait for a promise. it can only be used inside an async function within rejular JS Code; however it can be used on its own with JS Modules."
the await makes our code much more neater and easier to read. 
js requreis our await keywords be used inside functions with the async keyword. 
so, let's replace our promise chain with a function marked with the async keyword. 
let's call it getactivity and now we're going to make the same request to our board api,
but notice we have the await keyword before the method call and  immediately after on our next line of code we can use the response and log out to the console the suggested activity. 

now, because the await keyword allows us the move this kind of asynchronous code back into the main flow of our app, 
we don't have access to this specialized cath method to handle any errors that occur. 
so, what happens if something goes wrong. well because our code executes sequentially we can just wrap this with a normal try catch block. 
inside our catch method we can just log out to the console the error less time to simulate a server error we'll use the 500 server error. 
*/


async function getactivity2(){
    try{
        let response1 = await axios.get('https://www.boredapi.com/api/activity')
        console.log('this is the async and await approach:')
        console.log(`you could ${response1.data.activity}`) //this console logline will not run until the promise resolves or is returned. 
    } catch{
        console.log(`ERROR! ${error}`)

    }
}

getactivity2(); //We can call our get activity and we'll see that our code executes perfectly. 
