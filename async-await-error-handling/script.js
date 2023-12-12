// getUsers, placeholder term. 'async' term for asynchronous function.
const getUsers = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // The await operator is used to wait for a Promise and get its fulfillment value. 
    // It can only be used inside an async function or at the top level of a module.
    const response = await fetch('http://httpstat.us/500');

    if (!response.ok) {
      throw new Error('Request Failed');
    }

    const data = await response.text();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await fetch('http://httpstat.us/500');

  if (!response.ok) {
    throw new Error('Request Failed');
  }

  const data = await response.text();

  console.log(data);
};

// getUsers();
getPosts().catch((error) => console.log(error));

// The most common structure in Java for handling exceptions is a try/catch block. 
// Try/catch blocks allow a program to handle an exception gracefully in the way the programmer wants them to

// Difference between 'getUsers' and 'getPosts'...'getUsers' catches error within the function, (see line 16)
// 'getPosts' places error catch outside of function(see line 35)