import Shop from "@/models/shop";
import dbConnect from "@/lib/dbConnect";


export default async function handler(req,res) {
    const {restrauntId}=req.query;
    await dbConnect();
    try {
        const shopDetails=await Shop.findById(restrauntId);
        if(!shopDetails){
            res.status(404).json({message:"Page Not Found"});
        }
        res.status(200).json({shopDetails:shopDetails});
    } catch (error) {
        res.status(500).json({error:error});
    }
}