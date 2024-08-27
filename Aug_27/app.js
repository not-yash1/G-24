
import express from "express";
import dotenv from "dotenv"
import { router } from "./routes/route.js";
import { fileUpdate } from "./controller/controller.js";

dotenv.config({ path: './config/config.env' })

export const app = express();

app.use(fileUpdate, router)