
import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, loginUser, myProfile, updateUser } from "../controllers/userController.js";

export const router = express.Router();

// router.route("/user").post(createUser);

router.post("/user", createUser)

router.get("/users", getAllUsers)

router.get("/user/:id", getUser)

router.put("/user/:id", updateUser)

router.delete("/user/:id", deleteUser)

router.post("/user/login", loginUser)

router.get("/my/profile", myProfile)