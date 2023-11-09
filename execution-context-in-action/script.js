//  Go to 'sources' tab and add a breakpoint at the first line and step through to see the execution phase in action
// When you run any Javasript, a special environment is created to handle the transformation...
// & execution of code. Contains the currently running code and everything that aids in it's execution.
// Javascript is a 'single threaded' language, code is executed line by line.
const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
