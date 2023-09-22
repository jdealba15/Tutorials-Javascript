// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

let myNewString;

// Solution 1: 
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
    //charAt() method returns the character at the specified index in a string. 
    //"substring()" method extracts string starting from the index or character listed in paranthesis.
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
    //slice method returns a copy of an array or string from a start index(can also include both a start and end index).

console.log(myNewString); 
