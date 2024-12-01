import User from "@/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req,res) {

    await dbConnect();

    if(req.method==="GET"){
        console.log("Testing123")
        
    const session=await getServerSession(req,res,authOptions);
        try {
            const user=await User.findById(session.user._id);
            console.log(user);
            
            if(!user){
                return res.status(500).json({message:"Something Went Wrong"});
            }
            const response={
                firstName:user.name.split(" ")[0],
                lastName:user.name.split(" ")[1],
                addresses:user.addresses,
                contactNo:user.contact,
                username:user.username,
                email:user.email
            }

            res.status(200).json({userDetails:response});
        } catch (error) {
            res.status(500).json({message:"Something Went Wrong"});
        }

    }


}