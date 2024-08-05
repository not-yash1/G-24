
// Middlewares refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions can perform various operations such as executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function.


// 1. Key Features :

    // 1.1 Order of Middleware: Middleware functions are executed in the order they are defined in the code.



// 2. Types of Middleware:

    // 2.1 Application-level middleware: Bound to an instance of express().

    // 2.2 Router-level middleware: Bound to an instance of express.Router().

    // 2.1 Error-handling middleware: Takes four arguments (err, req, res, next).

    // 2.1 Built-in middleware: Provided by Express (e.g., express.static, express.json).

    // 2.1 Third-party middleware: Installed via npm (e.g., body-parser, morgan).