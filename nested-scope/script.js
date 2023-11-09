function first() {
  const x = 100;

// Nested function, within a function...
  
  function second() {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y); (Returns error, cannot access 'child' variables, outside of scope...)

  second(); // Second can only be called within 'first' function...
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  console.log(y); // Will return error, this is a 'child' variable from a seperate scope
                  // Cannot access outside of scope, code block...
}
