/*
we've seen how node can read data or files from a computer now. but, sometimes those files could be very very very large and therfore it whould take a long time to read them.
to combat this we could use something known as steams. 
using streams we can start using the data before it's fully been read. 
steams work in a similar way to real live steams. 
imagine we had some kind of huge source of water and then also imagine we had a pool that needs filling up with water from that source. 
one option is whould be to get a huge tank fill it up completely with the full amount of water we need to fill the pool and then deliver it to the pool and empty all of the water in it dat once to fill it. 
that means that you have to wait a really long time while the tank fills up initially and then deliver it to the pool all at once. 
the other option would be to have a steam that delivers the water and that way it fills the pool a little bit at a time but we can start using the pool with a bit of water in it almost straight away. 

so, the same logic applies with data. 
now, imagine we have a huge large data source, some kind of huge file and we want to read it. 
we could wait untile all of it's been read and then do something with it, but that could take a long time. 
or, we could pass the data a bit at time through a stream, and this way small chunks of data are packaged up into what's known as !!!buffer!!!. 
and then, sent down the stram every time the buffer fills. so every time we get a new chunk of data from the buffer we can start using it. 
for example!!! you get this in action when you're probably streaming something on Netflix or youTube where little bits of data are sent to the browser a bit at a time so you can start watching straight away without having to wait for the whole video to load initially. 
this is the theory behind steams and buffers. let's see them in action!
*/

//require file system module. 
const fs = require('fs');

//we read data with readStrims and we write data with WriteStreams. 

//for readStreams let's read the blog3 big file first. 
//the first argument is the path of the file. 
//the second optional argument we could specify the encoding and set that to be utf-8 meaming it's going to encode this as it comes in and it will automatically be in a readable format. so now we no longer have to use the toString() on our chunk of data. 
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});

//we can also create write steams where we write data to a file a bit at a time. 
//we are doing the same proccess to writeStram like we did in the readStearm. 
//the argument is the file path we want to write to. let's create a new file called blog4 and write the large text from file blog-3 to our new file blog-4 using the writeStream. 
const writeStream = fs.createWriteStream('./docs/blog4.txt');


//after creating the readStream variable, the .on is an event listener. it is similar to event listener 'click' in our browser. this time we are listening to a data event on this read stream. 
//and that is basically every time we receive a buffer of data from the steam. 
//when we get chunck of 'data' that we can use from the steam. and everytime that we get a new chunk of data we fire this callback function and we get access to that chunck of data. 

readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----'); //if we readStream then we pass in the chunk every time the data event happens. 
  // console.log(chunk); //we can also do cunck.toString() if we want to see the info of the data. 
  writeStream.write('\nNEW CHUNK:\n'); //'/n stands for new line. every time we get new piece of data from the readSteam we're going to take that bit of data and we're going to write the new chunck to that file. 
  writeStream.write(chunk); //in order to write the chunk of data, we use the write method and then pass in the chunk of data we want to wite into the file. 
});

// piping
// pip is something that works well when we're passing data directly from a readable to a writable steam. 
// it's basically a much shorter way to write all of the upper stuff right here. it will essentially to the same thing. 
// but when we use a pipe it must be from a readable sream to writable one. so, 
readStream.pipe(writeStream); //here we are saying - take the readSteam that we're reading data from and i want you to pipe whatever you read from the read stream into the write steam. this is a much sorter way to then the code above. and it's doing the same thing.  
