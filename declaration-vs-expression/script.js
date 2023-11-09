// Function Declaration
function addDollarSign(value) {
  return '$' + value;
} //No semi-colon declaration...

// When using declarations, you can invoke the function before the declaration... 
//With expressions, you cannot...concept known as 'hoisting'...
console.log(addDollarSign(100));

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));
