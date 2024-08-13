
import express from "express";
import { createUser, updateUser, getAllUsers, getUser, deleteUser} from "./controllers/userController.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get('/', home)

// app.get('/about', about)

app.post("/api/user", createUser)

app.get("/api/users", getAllUsers)

app.get("/api/user/:id", getUser)

app.put("/api/user/:id", updateUser)

app.delete("/api/user/:id", deleteUser)

export default app;

