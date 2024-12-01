import User from "@/models/user";
import Order from "@/models/orders";
import dbConnect from "@/lib/dbConnect";
import Shop from "@/models/shop";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";



export default async function handler(req,res){


    const session=await getServerSession(req,res,authOptions);
    const orderDetails=req.body.order;
    const shopId=req.body.shopId;
    const totalPrice=req.body.totalPrice;
    

try {
        await dbConnect();
        const shop=await Shop.findById(shopId);
        console.log(orderDetails);
        const dataToStore=orderDetails.map((val)=>{
            
            return {
                menuItemId:val._id,
                name:val.name,
                quantity:val.quantity,
                price:val.price,
                customizations:val.customization,
                image:val.image
            }
        });
        const order=new Order({
            shopId:shop._id,
            shopName:shop.name,
            items:dataToStore,
            totalPrice:totalPrice,
            status:"Pending",
            timestamp:Date.now(),
        });
        console.log(order);
        
    
        const savedOrder=await order.save();
        console.log(savedOrder);
        
        
    
        const user=await User.findById(session.user._id);
        user.orders.push(savedOrder._id);
        await user.save();
    
        res.status(200).json({message:"Order Created Successfully",orderId:savedOrder._id});
} catch (error) {
    res.status(500).json({message:"Error in storing Data"});
}

}