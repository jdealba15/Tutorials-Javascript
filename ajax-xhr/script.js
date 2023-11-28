const xhr = new XMLHttpRequest();

// Specify method(i.e., 'GET' request) and endpoint/URL(api url, or file...) 
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos');

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

// event handler called 'onreadystatechange'...
xhr.onreadystatechange = function () {
  // 'this' keyword allows access to properties of XHR object // 
    if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText)); .responseText, return text of...
    const data = JSON.parse(this.responseText); // Remember, .parse is to convert string to array

    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

// 'send' method, requests return of data
xhr.send();
