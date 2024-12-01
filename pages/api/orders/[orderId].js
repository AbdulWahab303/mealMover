import User from "@/models/user";
import Order from "@/models/orders";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "@/lib/dbConnect";


export default async function handler(req,res) {
    await dbConnect();
    try {
        const id=req.query.orderId;
        const order=await Order.findById(id);
        if(!order){
            return res.status(500).json({message:"Something Went Wrong"});
        }
        return res.status(200).json({orderDetails:order});
    } catch (error) {
        return res.status(500).json({message:"Something Went Wrong",error:error});
    }
}