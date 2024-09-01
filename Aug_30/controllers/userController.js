
import {User} from '../models/userModel.js'
import jwt from "jsonwebtoken"

export const createUser = async (req, res) => {
    try {
        // Parsing body
        const {name, email, password, mobile, username} = req.body

        // Checking body data
        if(!name || !email || !password || !mobile || !username) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            })
        }

        // Check if user exists
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        // Creating user
        user = await User.create({
            name,
            email,
            password,
            mobile,
            username
        })

        const token = user.generateToken();

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            sameSite: "none",
            secure: true
        }

        res.cookie('token', token, options).status(201).json({
            success: true,
            message: "User created successfully",
            user,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()

        if(!users){
            return res.status(404).json({
                success: false,
                message: "No users found"
            })
        }

        res.status(200).json({
            success: true,
            users
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }

}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if(!user){
            return res.status(404).json({
                success: false,
                message: "No user found"
            })
        }

        res.status(200).json({
            success: true,
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        }) 
    }
}

export const updateUser = async (req, res) => {
    try {
        // Finding user
        const user = await User.findById(req.params.id)

        // Finding body
        const {name, email, password, mobile, username} = req.body

        // Checking body data
        if(!name && !email && !password && !mobile && !username){
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            })
        }

        // Checking user data
        if(!user){
            return res.status(404).json({
                success: false,
                message: "No user found"
            })
        }

        // Updating user
        if(name) user.name = name
        if(email) user.email = email
        if(password) user.password = password
        if(mobile) user.mobile = mobile
        if(username) user.username = username
        await user.save()

        // Sending response
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        // Finding user
        const user = await User.findById(req.params.id)

        // Checking user
        if(!user){
            return res.status(404).json({
                success: false,
                message: "No user found"
            })
        }

        // Deleting user
        await User.findByIdAndDelete(req.params.id)

        // Sending response
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const loginUser =  async (req, res) => {
    try {
        // Parsing body
        const { email, password } = req.body

        // Checking body data
        if(!email && !password){
            return res.status(400).json({
                success: false,
                message: "Provide all the fields"
            })
        }

        // Finding user
        const user = await User.findOne({ email }).select("+password")

        // Checking user
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User does not exist"
            })
        }

        // Password check
        const isMatch = await user.comparePassword(password);

        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        // Token generation
        const uid = await user.generateToken();

        // Response send
        const options = {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            secure: true,
            sameSite: "none",
            httpOnly: true
        }
        // console.log(uid)

        res.cookie("token", uid, options).status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
            token: uid
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const myProfile = async (req, res) => {
    try {
        // Access user from req
        const user = req.user;

        // Sending response
        res.status(200).json({
            success: true,
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateMyProfile = async (req, res) => {
    try {
        // Access user from req
        const user = req.user;

        // Parsing body data
        const {name, email, password, mobile, username} = req.body

        // Checking body data
        if(!name && !email && !password && !mobile && !username){
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            })
        }

        // Updating user
        if(name) user.name = name
        if(email) user.email = email
        if(password) user.password = password
        if(mobile) user.mobile = mobile
        if(username) user.username = username
        await user.save()

        // Sending response
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


