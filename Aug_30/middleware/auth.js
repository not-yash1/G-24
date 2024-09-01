import jwt from "jsonwebtoken"
import {User} from "../models/userModel.js"

export const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Please login to access this resource"
            })
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const id = decoded._id;

        const user = await User.findById(id);

        if(!user){
            return res.status(401).json({
                success: false,
                message: "Please login to access this resource"
            })
        }

        req.user = user;
        next();
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}