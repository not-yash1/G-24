
import express from "express";

export const router = express.Router();

router.route("/").get((req, res) => {
    res.send("Get Request")
})
.post((req, res) => {
    res.send("Post Request")
})
.put((req, res) => {
    res.send("Put Request")
})
.delete((req, res) => {
    res.send("Delete Request")
})