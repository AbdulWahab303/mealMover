import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";



export default async function handler(req,res) {
    await dbConnect();
    try {
        const query=req.query.username;
        console.log(query);
        
        
        const existingUser=await User.findOne({username:query});
        console.log(existingUser);
        
        if(existingUser){
            return res.status(400).json({message:"Username Already Taken"});
        }
        return res.status(200).json({message:"Username Available"});
    } catch (error) {
        console.log("Error Checking Username",error);
        return res.status(500).json({message:"Error Checking Username"})
    }

}