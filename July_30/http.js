
// http - The http module in Node.js provides the functionality to create an HTTP server and client. It includes classes and methods to handle HTTP requests and responses.


// 1 Key Classes and Methods :
    // 1.1 http.createServer([options][, requestListener])
    // 1.2 http.Server
    // 1.3 http.ClientRequest
    // 1.4 http.IncomingMessage
    // 1.5 http.ServerResponse
    // 1.6 http.request
    // 1.7 http.get
    // 1.8 http.Agent
    // 1.9 http.globalAgent


// 1.1 http.createServer([options][, requestListener]) : The http.createServer([options][, requestListener]) method in Node.js is used to create an HTTP server. This server can listen for HTTP requests and respond to them. Let's break down this method, explaining the options object and the requestListener function, and how the method works.


// 1.1.1 Syntax :

const http = require('http');
// const server = http.createServer([options], [requestListener]);


// 1.1.2 Parameters : 

  // 1.1.2.1 options: (optional) An object that may contain configuration settings for the server.

  // 1.1.2.2 requestListener: (optional) A callback function that is automatically added to the 'request' event.


// 1.1.3 Return Value : Returns a new instance of http.Server.


// 1.1.4 Options Object : (optional) An object that may contain configuration settings for the server. The following options are supported:

    // 1.1.4.1 host: (optional) The hostname or IP address for the server to listen on. Defaults to 'localhost'.
    // 1.1.4.2 port: (optional) The port number for the server to listen on. Defaults to 80.
    // 1.1.4.3 backlog: (optional) The maximum length of the queue of pending connections. Defaults to 511.
    // 1.1.4.4 path: (optional) The path to serve static files from. Defaults to '/'.
    // 1.1.4.5 allowHalfOpen: (optional) When true, the server will wait for the other end to send data before closing. Defaults to false.
    // 1.1.4.6 exclusive: (optional) When true, the server will listen on the specified port, even if another program is already listening on the port. Defaults to false.
    // 1.1.4.7 headers: (optional) An object containing custom headers to add to the response. Defaults to {}.
    // 1.1.4.8 method: (optional) The HTTP method to use. Defaults to 'GET'.
    // 1.1.4.9 agent: (optional) An object that specifies a custom agent for handling requests. Defaults to null.
    // 1.1.4.10 timeout: (optional) The maximum number of milliseconds to wait for the server to respond. Defaults to 120000 (2 minutes).
    // 1.1.4.11 headersTimeout: (optional) The maximum number of milliseconds to wait for the headers to be received. Defaults to 60000 (1 minute).
    // 1.1.4.12 maxHeadersCount: (optional) The maximum number of headers allowed. Defaults to 2000.
    // 1.1.4.13 insecureHTTPParser: (optional) When true, the server will not validate incoming HTTP headers. Defaults to false.
    // 1.1.4.14 keepAlive: (optional) When true, the server will enable keep-alive functionality. Defaults to true.
    // 1.1.4.15 keepAliveTimeout: (optional) The maximum number of milliseconds to wait for the next request when keep-alive is enabled. Defaults to 5000.
    // 1.1.4.16 maxRequests: (optional) The maximum number of requests allowed. Defaults to Infinity.
    // 1.1.4.17 maxRequestsPerSocket: (optional) The maximum number of requests allowed per socket. Defaults to Infinity.
    // 1.1.4.18 maxConnections: (optional) The maximum number of connections allowed. Defaults to Infinity.
    // 1.1.4.19 maxSockets: (optional) The maximum number of sockets allowed. Defaults to Infinity.


// 1.1.5 requestListener: (optional) A callback function that is automatically added to the 'request' event.

    // 1.1.5.1 req: An instance of http.IncomingMessage representing the incoming request.
    // 1.1.5.2 res: An instance of http.ServerResponse representing the outgoing response.



    // const http = require('http');

    const options = {
      // IncomingMessage: require('./customIncomingMessage'), // hypothetical custom class
      // ServerResponse: require('./customServerResponse'), // hypothetical custom class
      maxHeaderSize: 8192,
      insecureHTTPParser: false,
      timeout: 120000,
      headersTimeout: 60000,
    };
    
    const server1 = http.createServer(options, (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World!\n');
    });
    
    server1.listen(3000, () => {
      console.log('Server running at http://127.0.0.1:3000/');
    });
    
