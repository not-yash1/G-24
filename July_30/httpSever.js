
// 1. Importing the http module :
const http = require('http');


// 2. Creating an HTTP server :
const server = http.createServer((req, res) => {
    // Handle request and response here
});


// 3. Handling requests and responses :
const server1 = http.createServer((req, res) => {
    // Set the response header with status code and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Write the response body
    res.write('Hello, World!');
    // End the response
    res.end();
});


// 4. Listening on a port :

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  

// 5. Complete example :

const http = require('http');

const server2 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, World!');
  res.end();
});

const PORT1 = 3000;

server2.listen(PORT1, () => {
  console.log(`Server is running on http://localhost:${PORT1}`);
});


// 6. Handling Different Routes and Methods :

const http = require('http');

const server3 = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('Home Page');
    } else if (req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('About Page');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('Page Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.write('Method Not Allowed');
  }
  res.end();
});

const PORT2 = 3000;

server3.listen(PORT2, () => {
  console.log(`Server is running on http://localhost:${PORT2}`);
});


// 7. Handling JSON Data :

const http = require('http');

const server4 = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/data') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const parsedData = JSON.parse(body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Data received', data: parsedData }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page Not Found');
    res.end();
  }
});

const PORT3 = 3000;

server4.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT3}`);
});


// 8. Using http.Server and http.ServerResponse

    // http.Server: Represents an HTTP server.
    // http.ServerResponse: Represents the response object that is passed as the second argument to the request handler function.
  