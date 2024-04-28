const items = ['phone', 'silverware', 'water-bottle', 'computer'];
const users = [{ name: 'John' }, { name: 'Jorge'}, { name: 'Romulo'}, { name: 'Michael'}];

for (const item of items) {
    console.log(item);
}

for (const user of users) {
    console.log(user.name);
}

const str = "Hello World";
for(const letter of str) {
    console.log(letter);
}

const method = new Map();
method.set('name', 'John');
method.set('age', 30);

console.log(method);
for (const [key, value] of method) {
    console.log(key, value);
}