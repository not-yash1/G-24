
import express from "express";
import {home, about, createUser, updateUser} from "./controllers/userController.js";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', home)

app.get('/about', about)

app.post("/api/user", createUser)

app.put("/api/user/:id", updateUser)

export default app;

