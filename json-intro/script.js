const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string, e.g. for sending data to a server
const str = JSON.stringify(post);

console.log(str.id);

// Parse JSON, convert to javascript object
const obj = JSON.parse(str);

console.log(obj.id);

// JSON & arrays
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
