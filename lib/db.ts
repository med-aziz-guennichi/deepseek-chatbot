import mongoose from "mongoose";

export async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connected to MongoDB");
    } catch (error: any) {
        console.error(error);
        throw new Error(error.message)
    }
}