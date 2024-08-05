
const http = require('http')

const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send(`Get Request`)
    console.log("Home get")
})

// app.get('/about', (req, res) => {
//     res.send(`Get About ${req.query.name} and age is ${req.query.age}`)
//     console.log("About get")
// })

// app.get("/api/v1", (req, res) => {
//     console.log("Api request...")
//     res.status(200).json({
//         success: true,
//         message: "Api working..."
//     })
// })

// app.use("/api/v1", userRouter);

// const userRouter = express.Router();
// userRouter.get("/user").route(userController)

// function userController(){
//     res.status(200).json({
//         success: true,
//         message: "Router working"
//     })
// }


// function myHandler (req, res){
//     if(req.url === '/'){
//         if(req.method === 'GET'){
//             res.write("Get Request")
//         } else if(req.method === 'POST'){
//             res.write("Post Request")
//         } else if(req.method === 'PUT'){
//             res.write("Put Request")
//         } else if(req.method === 'DELETE'){
//             res.write("Delete Request")
//         }
//         res.end("\n Home page")
//     } else if(req.url === '/about'){
//         if(req.method === 'GET'){
//             res.write("Get Request")
//         } else if(req.method === 'POST'){
//             res.write("Post Request")
//         } else if(req.method === 'PUT'){
//             res.write("Put Request")
//         } else if(req.method === 'DELETE'){
//             res.write("Delete Request")
//         }
//         res.end("\n About page")
//     }
// }


// const myServer = http.createServer(app)

app.listen(3003, () => {
    console.log("Server is running on http://localhost:3003")
})