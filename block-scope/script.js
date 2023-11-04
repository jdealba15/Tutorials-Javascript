const x = 100;

// An If statement is a block(meaning, content inside curly braces...)
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined, it is 'scoped' only within the loop

// Using var
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c); // var isn't block scoped, (unlike 'const' or 'let')
                // Can be accessed outside of code block for a 'loop' or 'if statement'...

// var IS function scoped, cannot be accessed outside of the function.
function run() {
  var d = 100;
  console.log(d);
}

run();

// console.log(d);


const foo = 1;
var bar = 2; // Put on the window object
