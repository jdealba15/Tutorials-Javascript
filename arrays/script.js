let x;

//Arrays are a special type of 'object' and data structure in Javascript that stores multiple values.
//Numbered by index, or zero based.
//Arrays can contain different data types(numbers, strings, booleans...)
//Arrays are mutable, contents can be altered or changed.

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

// Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

// length is not read-only
// fruits.length = 2;

fruits[3] = 'strawberry';

// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);
