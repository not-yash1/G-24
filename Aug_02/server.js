
import express from "express";
import users from "./data.json" assert { type: "json" };

const app = express();
const PORT = 4000

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