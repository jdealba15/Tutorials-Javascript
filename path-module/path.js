const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// basename() ...method to acquire basename of file
const base1 = path.basename(myFilePath); 
const base2 = path.basename(myFilePath, '.js');

console.log(base1);
console.log(base2);

// extname() 
const ext = path.extname(myFilePath);
console.log(ext);

const dir = path.dirname(myFilePath);
console.log(dir);

// join() ...create relative file path
const myPath = path.join('subfolder', 'anotherFolder', 'index.js');
console.log(myPath);

// resolve() ...create absolute path
const myPath2 = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(myPath2);

// __dirname ...returns absolute path of directory containing current file being executed
console.log(__dirname);