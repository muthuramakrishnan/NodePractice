const http = require("http"); //this imports gloabl http module
const fs = require('fs');

//http createServer takes requestListener as the callback function
//request listener is a callback fn for each request
//this request listener has 2 arguments.
//1 is request and the other is response
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log("url", url);
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write(
      '<body><form action="/message" method="post"><input type="text" name="message"><button type="submit" onclick="()=>{preventDefault()}">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync('message.txt', 'DUMMY');
    // res.writeHead(302, {}) --> res.writeHead allows you to write response code and headers in one shot
    res.setHeader('Location', '/');
    res.statusCode=302;
    return res.end();
  }
  else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>Hello world</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);
