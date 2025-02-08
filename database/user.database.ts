import { model, models, Schema, Types, Document } from "mongoose";

export interface IUser extends Document {
    _id: Types.ObjectId
    firstName: string,
    clerkId: string,
    lastName: string,
    email: string,
    imageUrl: string
}

const userSchema = new Schema<IUser, {}, {}>({
    firstName: String,
    clerkId: String,
    lastName: String,
    email: String,
    imageUrl: String
}, { timestamps: true, });

const User = models?.User || model<IUser>("User", userSchema);
export default User;