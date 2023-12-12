const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 20 });
  }, 1000);
});

// promise.then((data) => console.log(data));

// adding 'async' to our function makes the function asynchronous

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// 'await' function waits for promise to be fullfilled, then moves on to assigning it to our varaible(in this case, const)

// getPromise();

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

// getUsers();

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  throw new Error('Hello');

  console.log(data);
};

getPosts().catch((error) => console.log(error));

