
import express from "express";
import users from "./data.json" assert { type: "json" };

const app = express();
const PORT = 4000

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    // console.log(`Server is running at ${req.protocol}://${req.hostname}${PORT}${req.path}`);
    next();
})

app.use("/about", (req, res, next) => {
    // console.log("About Route only");
    console.log(`Server is running at ${req.protocol}://${req.hostname}${PORT}/about${req.path}`);
    next();
})

app.get("/", (req, res) => {
    console.log("Home get")
    res.send(`Get Request`)
})

app.get("/users", (req, res) => {
    res.send(users)
    // console.log("Home get")
})

app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id)
    res.send(user)
    // console.log("Home get")
})

app.post("/api/users", (req, res) => {
    const body = req.body;
    console.log(body);
    users.push({...body, id: users.length + 1})
    res.send("User added successfully...")
})

app.route("/api/users/:id")
    .put((req, res) => {
    const id = req.params.id
    const body = req.body
    console.log(body)

    const user = users.find(user => user.id == id)

    user.first_name = body.first_name
    res.send("User updated successfully...")
    })
    .delete((req, res) => {
        const id = Number(req.params.id)
        // const user = users.filter(user => user.id != id)
        users.splice(id);
        res.send("User deleted successfully")
    })

app.put("/api/users/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    console.log(body)

    const user = users.find(user => user.id == id)

    user.first_name = body.first_name
    res.send("User updated successfully...")
})

app.delete("api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    // const user = users.filter(user => user.id != id)
    users.splice(id);
    res.send("User deleted successfully")
})


app.get("/api/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})







// app.delete("/users/:id", (req, res) => {
//     const id = req.params.id
//     const user = users.filter(user => user.id != id)
//     // const user = users.find(user => user.id == id)
//     res.send(user)
//     // console.log("Home get")
// })




// To review :
// users.map(user => {
    //     if(user.id === id) {
    //         user.first_name = body.first_name;
    //         console.log(user.first_name)
    //     }
    // })