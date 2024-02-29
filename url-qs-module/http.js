const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;

    console.log(request.url);

    response.end('Hello');
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});