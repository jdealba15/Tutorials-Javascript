let x;
//"Math" is a built-in object that allows you to perform mathematical operations on the Number type.

// Square root
x = Math.sqrt(9);

// Absolute value
x = Math.abs(-5);

// Round
x = Math.round(4.2);

// Round up
x = Math.ceil(4.2);

// Round down
x = Math.floor(4.9);

// Exponent
x = Math.pow(2, 3); //returms 8.

// Minimum number
x = Math.min(4, 5, 3);

// Maximum number
x = Math.max(4, 5, 3);

// Get a random number/decimal between 0 and 1
x = Math.random();

// Get a random number between 1 and 100(.floor method rounds off number to it's nearest integer...)
x = Math.floor(Math.random() * 100 + 1);

console.log(x);