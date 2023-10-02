let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting arrays, or having an array as an index inside of another array...

// Nesting berries inside of fruits
fruits.push(berries);

// Now we can access 'blueberry' with the following
x = fruits[3][1];

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() - Concatenate arrays(join two arrays together)
x = fruits.concat(berries);

// spread operator (...) - Concatenate with, extract variables out of said array
x = [...fruits, ...berries];

// flat() - Flatten an array, variables inside of nested arrays are extracted and added to parent array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat(); //E.g. : [1, 2, 3, 4, 5, 6, 7, 8 ]

// Static methods of Array object

// isArray() - Check is is an array, returns boolean
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from('12345');
//E.g. : [1, 2, 3, 4, 5 ]

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
