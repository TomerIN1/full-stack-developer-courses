//in the past people whould use the rquire function to inmport functions and code from other files. 
//but now we have import and export. 
//you can export code in one file and then import it in another file.
//it also allows you to only import certain functions from a file or certain variables. 

//to import a file or a function from a different file first in the origin file you need to use the export keyword. 
//than, in order to import it, use the import keywork {what you want to import} from "file name" ./ = current directory.
import { capitalizeString } from "./104.2-string_function";

//in this file we assing cap to a function from a differenct file. we need to import this function first if we want to use it.  
const cap = capitalizeString("hello!"); 

//we want to log our the capitalized strings. 
console.log(cap);