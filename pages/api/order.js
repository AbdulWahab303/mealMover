import User from "@/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import dbConnect from "@/lib/dbConnect";


export default async function handler(req,res) {
    console.log("DATA!!!!");
    
    const session=await getServerSession(req,res,authOptions);
    const id=session.user._id;
    await dbConnect();
    try {
        const user=await User.findById(id).populate('orders');
        res.status(200).json({userOrders:user.orders});
    } catch (error) {
        res.status(404).json({message:"Something Went Wrong"});
    }
}