// Remember, method 'getData' used to get data in the specified format from the clipboard either via dataTransfer object or via the clipboardData object
function getData(endpoint) { 
// Remember, 'promise' method is an object that will produce a single value some time in the future. 
// If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // 'xhr' is a placeholder attribute/name for the XMLHttpRequest...

    xhr.open('GET', endpoint); // 'xhr' method takes in two parameters: 1. type or request, 2. URL of data fetch or file
// readyState property describes the loading state of the document. 4 means request is finished and response is ready 
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
// 'this.status' checks the status of the response. If 'this.status' returns 200, response is successful
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');

const dummyPromise = new Promise((resolve, reject) => {
  resolve('Hello World');
});

// Takes in promises
Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
  .then((data) => {
    // Returns an array of promise results
    console.log(data);
  })
  .catch((error) => console.log(error));
