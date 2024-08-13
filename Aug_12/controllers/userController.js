
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

// export const updateUser = async (req, res) => {
//     try {
//         const users = [{
//             id: 1,
//             first_name: "Test",
//             last_name: "User",
//             ip_address: "127.0.0.1",
//             email: "testuser@us.com",
//             gender: "Male"
//         }]
//         const id = req.params.id
//         const body = req.body
//         users.map(user => {
//             if (user.id == id) {
//                 user.first_name = body.first_name
//                 user.last_name = body.last_name
//                 user.email = body.email
//             }
//         })
//         console.log(users)
//         res.send("User updated successfully...")
//     } catch (error) {
//         console.error(error)
//     }
// }

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

