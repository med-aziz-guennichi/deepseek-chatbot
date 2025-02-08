import User, { IUser } from "@/database/user.database";
import { connectDb } from "@/lib/db";

export const POST = async (req: Request) => {
    await connectDb();
    const { data } = await req.json();
    const emailAddress = data.email_addresses[0].email_address;
    const firstName = data.first_name;
    const lastName = data.last_name;
    const imageUrl = data.image_url;
    const id = data.id;
    const newUser: IUser = new User({
        clerkId: id,
        firstName,
        lastName,
        email: emailAddress,
        imageUrl
    });
    await newUser.save();
    console.log('user created');
    return new Response(`Webhook received`, { status: 200 });
}