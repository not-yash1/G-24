
// Q-1 : What will be the output of the following code?

// var animal = "cat";
// if(1) {
//     animal = "panda";
//     function animal(){};
//     console.log(animal);
//     animal = "horse";
// }
// console.log(animal);











// Q-2 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.use(async (req, res, next) => {
//     console.log('Middleware 1: Start');
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log('Middleware 1: End');
// });

// app.use((req, res, next) => {
//     console.log('Middleware 2');
//     res.send('Hello, World!');
// });

// app.listen(3002, () => console.log('Server running on port 3002'));
















// Q-3 : How would you modify this middleware to deny access to '/admin' routes from specific IP addresses?


// import express from 'express'
// const app = express();

// // req.ip == 'None'
// const ip = "None"

// app.use((req, res, next) => {
//     if (req.path.startsWith('/admin')) {
//         console.log(`Admin access attempt from IP: ${req.ip}`);
//         if(ip != "None"){
//             next()
//         }
//     } else {
//         next();
//     }
// });

// app.get('/', (req, res) => {
//     res.send('Home Page');
// })

// app.get('/admin/dashboard', (req, res) => {
//     res.send('Admin Dashboard');
// });

// app.get('/user/profile', (req, res) => {
//     res.send('User Profile');
// });

// app.listen(3002, () => console.log('Server running on port 3002'));














// Q-4 : Why might the console.log in the second middleware not accurately reflect the request duration? How can you correctly calculate the time taken to process the request?


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     req.startTime = new Date().getTime();
//     console.log(new Date().toLocaleTimeString())
//     next();
// });

// app.get('/', (req, res, next) => {
//     res.send("Home Page")
//     next();
// });

// app.use((req, res, next) => {
//     // res.end()
//     console.log(`Request processed in ${new Date().getTime() - new Date(req.startTime)}ms`);
//     next();
// });

// app.listen(3002, () => console.log('Server running on port 3002'));










// Q-5 : How would you modify this middleware to send different responses based on the environment (development vs. production)?


// import express from 'express'
// const app = express();

// app.get('/error', (req, res, next) => {
//     const err = new Error('Something went wrong');
//     err.status = 500;
//     // console.log(err)
//     next(err);
// });

// app.use((err, req, res, next) => {
//     const statusCode = err.status || 500;
//     console.log(err.status)
//     const errorResponse = {
//         message: err.message,
//         timestamp: new Date().toISOString(),
//         status: statusCode
//     };
//     res.status(statusCode).json(errorResponse);
// });

// app.listen(3002, () => console.log('Server running on port 3002'));








// Q-5.1 : Passing arguments to next()


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     req.startTime = new Date().getTime();
//     console.log(new Date().toLocaleTimeString())
//     const val = {name: "Yash", job: "Developer"}
//     next();
// });

// app.get('/', (req, res, next) => {
//     // res.send('Hello, World!');
//     // console.log(val)
//     const val = {name: "Yash", job: "Developer"}
//     // next(val);
//     res.json("Something")
//     next(val)
// });

// app.use((req, res, next) => {
//     console.log(`Request processed in ${new Date().getTime() - new Date(req.startTime)}ms`);
//     next();
// });

// app.use((err, req, res, next) => {
//     console.log(err)
//     res.status(400).end("Finally");
// });

// app.listen(3002, () => console.log('Server running on port 3002'));









// Q-6 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.get('/', (req, res, next) => {
//     console.log("Main function")
//     res.send('Home Page');
// });

// app.use((req, res, next) => {
//     console.log("Middleware")
// });

// app.listen(3002, () => console.log('Server running on port 3002'));









// Q-7 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.get('/', (req, res, next) => {
//     setTimeout(() => {
//         res.end('Home Page1');
//     }, 2000)
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Middleware")
//     res.write('Home Page2');
// });

// app.listen(3002, () => console.log('Server running on port 3002'));









// Q-8 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.get('/', (req, res, next) => {
//     setTimeout(() => {
//         console.log("Main function")
//     }, 2000)
// });

// app.use((req, res, next) => {
//     console.log("Middleware")
//     res.send('Home Page2');
// });

// app.listen(3002, () => console.log('Server running on port 3002'));








// Q-9 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware")
//     res.send('Home Page2');
// });

// app.get('/', (req, res, next) => {
//     setTimeout(() => {
//         console.log("Main function")
//     }, 2000)
// });

// app.listen(3002, () => console.log('Server running on port 3002'));







// Q-10 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware")
//     setTimeout(() => {
//         console.log("Middleware2")
//         res.send('Home Page3');
//     })
//     res.send('Home Page2');
// });

// app.get('/', (req, res, next) => {
//     setTimeout(() => {
//         console.log("Main function")
//     }, 2000)
// });

// app.listen(3002, () => console.log('Server running on port 3002'));






// Q-11 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware")
//     setTimeout(() => {
//         console.log("Middleware2")
//     }, 1000)
//     res.send('Home Page2');
// });

// app.get('/', (req, res, next) => {
//     setTimeout(() => {
//         console.log("Main function")
//     }, 2000)
// });

// app.listen(3002, () => console.log('Server running on port 3000'));





// Q-12 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware")
//     setTimeout(() => {
//         console.log("Middleware2")
//     })
//     res.send('Home Page2');
//     next()
// });

// app.get('/', (req, res, next) => {
//     console.log("Main function")
// });

// app.listen(3002, () => console.log('Server running on port 3000'));





// Q-13 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware")
//     setTimeout(() => {
//         console.log("Middleware2")
//     })
// });

// app.get('/', (req, res, next) => {
//     console.log("Main function")
//     res.send('Home Page1');
// });

// app.listen(3002, () => console.log('Server running on port 3002'));






// Q-14 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware")
//     setTimeout(() => {
//         console.log("Middleware2")
//     }, 1000)
//     next()
// });

// app.get('/', (req, res, next) => {
//     console.log("Main function")
//     res.send('Home Page1');
// });

// app.listen(3002, () => console.log('Server running on port 3000'));






// Q-15 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware")
//     setTimeout(() => {
//         console.log("Middleware2")
//     })
//     next()
// });

// app.get('/', (req, res, next) => {
//     console.log("Main function")
//     res.send('Home Page1');
// });

// app.listen(3002, () => console.log('Server running on port 3000'));






// Q-16 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware")
//     setInterval(() => {
//         console.log("Middleware2")
//     }, 1000)
//     next()
// });

// app.get('/', (req, res, next) => {
//     console.log("Main function")
//     res.send('Home Page1');
// });

// app.listen(3002, () => console.log('Server running on port 3000'));






// Q-17 : What will be the output of the following code?


// import express from 'express'
// const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware")
//     setInterval(() => {
//         console.log("Middleware2")
//     }, 1000)
//     next()
// });

// app.get('/', (req, res, next) => {
//     console.log("Main function")
//     setTimeout(() => {
//         console.log("Main function2")
//     }, 2000)
//     res.send('Home Page1');
// });

// app.listen(3002, () => console.log('Server running on port 3000'));













// Q-18 : Create router-level middleware that checks the user's role before allowing access to certain routes. Assume the user's role is available in 'req.user.role'

// import express from 'express'
// const app = express();
// const adminRouter = express.Router();
// const userRouter = express.Router();

// // req.user.role == admin || user

// const role = "admin"
// const checkUser = (req, res, next) => {
//     if(role != "user"){
//         res.status(403).send("Access denied")
//     } else {
//         next();
//     }
// }

// const checkAdmin = (req, res, next) => {
//     if(role != "admin"){
//         res.status(403).send("Access denied")
//     } else {
//         next();
//     }
// }


// adminRouter.get('/dashboard', (req, res) => {
//     res.send('Admin Dashboard');
// });

// userRouter.get('/dashboard', (req, res) => {
//     res.send('User Dashboard');
// });

// app.use('/admin', checkAdmin, adminRouter);
// app.use('/user', checkUser, userRouter);

// app.listen(3002, () => console.log('Server running on port 3002'));












// Q-19 : What are the potential consequences of using fs.readFileSync in a high-traffic application, and how does switching to the asynchronous fs.readFile improve performance?

// import express from 'express'
// const fs = require('fs');
// const app = express();

// app.get('/read-file', (req, res) => {
//     // const data = fs.readFileSync('/path/to/large/file.txt', 'utf8');
//     // res.send(data);
//     fs.readFile('file.txt', 'utf8', (err, data) => {
//         if (err) {
//           res.status(500).send('Error reading file');
//           return;
//         }
//         res.send(data);
//     });
// });

// app.listen(3000, () => console.log('Server running on port 3000'));













// Q-20 : How can you modify the middleware to handle different content types (e.g., application/x-www-form-urlencoded) and set different size limits for each?

// import express from 'express'
// // const bodyParser = require('body-parser');
// const app = express();

// // app.use(bodyParser.json());

// app.post('/submit', express.json(), (req, res) => {
//     res.send('Data received');
// });

// app.use((err, req, res, next) => {
//     if (err.type === 'entity.too.large') {
//         res.status(413).send('Payload too large');
//     } else {
//         next(err);
//     }
// });

// app.listen(3002, () => console.log('Server running on port 3002'));





