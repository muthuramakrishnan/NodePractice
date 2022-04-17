const http = require('http'); //this imports gloabl http module


//http createServer takes requestListener as the callback function
//request listener is a callback fn for each request
//this request listener has 2 arguments.
//1 is request and the other is response
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello world</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);