//2 min mark...
//  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax (introduced in Javascript 2015 ES6 update...)
const add = (a, b) => { // (=>'fat arrow')
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b; // No curly braces for code block
                                  // No 'return' for values

// Can leave off () with a single param
const double = (a) => a * 2;

// Returning an object, object needs paranthesis...
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());
