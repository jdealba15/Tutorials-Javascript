// console.log("Hello from Node.js");

// run file, node nameOfFile(node app.js)

async function getUser() {
    const response = await fetch('https://api.github.com/users/bradtraversy');
    const data = await response.json();
    console.log(data);
}

getUser();