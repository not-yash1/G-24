
import {User} from '../models/userModel.js'

export const createUser = async (req, res) => {
    try {
        const {name, email, password, mobile, username} = req.body

        if(!name || !email || !password || !mobile || !username) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            })
        }

        const user = await User.create({
            name,
            email,
            password,
            mobile,
            username
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
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

export const loginUser = async (req, res) => {
    try {
        // Parsing body
        const {email, password} = req.body

        // Checking fields
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password"
            })
        }

        // Finding user
        const user = await User.findOne({email})
        // const user1 = await User.find({email})

        // Checking user
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        // Matching password
        if(password != user.password){
            return res.status(400).json({
                success: false,
                message: "Incorrect password"
            })
        }

        // Sending response
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
