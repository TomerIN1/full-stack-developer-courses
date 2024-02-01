/*
One of the things that we can do with node is use its filesystem core module to do things like read files, create files and delete files on our computure. 
This ability to interact with the filesystem on a computer with JavaScript is something that can't be done without node, and it's a really important feature to have for any kind of computer program or server-side code that needs to do that. 
let's learn how to read, write, create and delete directories and delte files. 
*/

//firest let's require the fs core module. 
const fs = require('fs');

// reading files
//readFile methods, takes two arguments (file path and a callback function).the callback function that needs to read it and get it here. 
//this callback function will fire when the readFile is complete. so this method right here is asynchronous and that basically means that it takes some time to do. 
//once it's done, it will fire the argument function. 
fs.readFile('./docs/blog.txt', (err, data) => { 
  if (err) { //if err console.log and show the err
    console.log(err);
  }  
  console.log(data.toString()); //the data wihtout .toString() is called a buffer and it looks strange. a buffer is basically just a package of data that's been sent to us when we read this file. in order to see the actual string we should use the toString() method that will turn the buffer into a string so we can read it. 
});

//look at the code line bellow. remember that the readFile is async which this task can take some time and also it doesn't block our code. 
//meaning, it's not going to stop the code from carrying on down here and executing all the lines of code, even though is taking some time to do. 
//it doesn't sit around and wait for this to happen before it moves on. it carries on with the code and then when the async done you fires that callback function. 
//so, if you run the code, then the 'last line' will be executed before the readFile finish it's task.
// console.log('last line');

// writing files
// to write file, this time we are going to use the writeFile method. 
// here it takes three arguments:
// the first argument is the relative path to the file we want to write to. if the file is not exist then it will also create this file too.
// the second argument is the text that we actually want to write to this file. 
// the third argument is a callback function, letting us know that the write process has over, and fire a message for us. 
// it is important to note, if you're writing to an existing file, it will replace all the curr contant of this file with the new passed content. 
fs.writeFile('./docs/blog.txt', 'hello, world', () => {
  console.log('file was written');
});

// here we are creating a new file that did not exsists. 
fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
  console.log('file was written');
});

// directories
// say for example we want to create a new folder called assets. we can do that using a mothod called mkdir which stands for "make directory". 
// this is going to make a new directory for us. we need to specify what directory to make. 

if (!fs.existsSync('./assets')) { //is if statement is to check if we already have created this asset folder. if so, then pass and don't run it one more time bucause it will end in an error. in order to do that, we are using the df.existsSync() method and it's gonna check if something exists. we want to check if the asset folder is exists. but now, it returns true to the file that is already exists. so, in order to reverse the exists we placing an exclamation mark (!) in front of it, so now if this does exist and it returns a true value the ! will negate it and send it into a false value and therefore this will only run if this dosen't exist.  
  fs.mkdir('./assets', err => { //fs.mkdir then create a directory called assets. this is also async task that takes time. we fire a callback func when this done. 
    if (err) { //here we create if else statement that tells us if an err happend during the creation of the new directory or the new directory was created successfully. 
      console.log(err);
    }
    console.log('folder created');
  });
} else { //we add else clause to this so we can remove the directory. only run the upper code if this directory doesn't sxist. if it does, then we'll run this else clause and we'll remove the folder instead. 
  fs.rmdir('./assets', err => { //rmdir stands for 'remove directory'. 
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// deleting files
// here we are delete file if it exists. 
if (fs.existsSync('./docs/deleteme.txt')) { //here we chech if the file exist. if so, then 
  fs.unlink('./docs/deleteme.txt', err => { //use the fs.unlink method to delete this file. here you pass 2 arrgs which is the path of the file you want to delete and a callback function that notifies you when it's done. 
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}

//here is how to use the fileSytem in node.js and it workds well for small files. 
//but, if we're reading from and writing to really really large files then it becomes more efficient to use steams to read and write data to and from files. 
//let's go to the steams file to check it out. 
