// Fetching a JSON file
fetch('./movies.json')
  .then((response) => response.json()) // fetch method returns a 'response' object
  .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text()) // Use 'txt' method for txt type files. 'json' for json types,
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/bradtraversy')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.login));

  // Fetch is a method available on the window object
  // Unless specified, all requests by defualt are 'get' requests

fetch('./movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
  });