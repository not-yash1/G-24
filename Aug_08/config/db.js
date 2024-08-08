
import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.DB_URI)
    .then((data) => {
        console.log(`MongoDB Connected: ${data.connection.host}`);
    })
    .catch((error) => {
        console.error(error);
    })
}