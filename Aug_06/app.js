
import express from "express";
import users from "./data.json" assert { type: "json" };
import { home, getUsers, getUser, createUser, deleteUser, updateUser } from "./controllers/userController.js";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", home)

app.get("/users", getUsers)

app.get("/users/:id", getUser)

app.post("/api/user", createUser)

app.route("/api/users/:id").put(updateUser).delete(deleteUser)

export default app;