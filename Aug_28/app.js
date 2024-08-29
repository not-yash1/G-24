
import express from "express";
import { router } from "./routes/userRoute.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get('/', home)

// app.get('/about', about)

app.use("/api", router);

export default app;

