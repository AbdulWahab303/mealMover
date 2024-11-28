import Shop from "@/models/shop";
import dbConnect from "@/lib/dbConnect";


export default async function handler(req,res){
    await dbConnect();
    if(req.method==="GET"){
        try {
            const Shops=await Shop.find({},{name:1,image:1,"details.timing":1,"details.location":1,reviews:1});
            res.status(200).json({Shops:Shops});
        } catch (error) {
            res.status(500).json({error:error});
        }
    }
    else{
        res.status(400).json({message:"Method Not Correct"});
    }
}