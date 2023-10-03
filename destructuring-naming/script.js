 // Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// Instead of an explicit key/value pair, variables inside an object can directly reference the key of outside values.
const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring object properties

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers; //'first','second', methods for pulling variables from array. '...rest', method for pulling remaining variables in an array.

console.log(first, second, rest);
