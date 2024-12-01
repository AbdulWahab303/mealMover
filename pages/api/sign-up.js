import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcryptjs";


export default async function POST(req,res){
    await dbConnect();

    try {
        console.log(req.body);
        const {formData}=req.body;
        console.log(formData.username);
        const existingUserVerifiedByUsername=await User.findOne({
            username:formData.username,
        })

        if(existingUserVerifiedByUsername){
            return res.json({
                success:false,
                message:"Username is already taken"
            },{
                status:400
            })
        }

        const existingUserEmail=await User.findOne({
            email:formData.email
        })
        // const verifyCode=Math.floor(100000+Math.random()*900000).toString();


        if(existingUserEmail){
                return res.json(
                    {
                        success:false,
                        message:"User with this email already exists"
                    },
                    {
                        status:400
                    }
                )
        }
        else{
            console.log("HERE2");
            
            const hashedPassword=await bcrypt.hash(formData.password,10);
            const address={
                street:formData.street,
                city:formData.city,
                state:formData.state,
                zip:formData.zip,
                country:formData.country,
                houseNo:formData.houseNo
            }
            const newUser=new User({
                username:formData.username,
                email:formData.email,
                password:hashedPassword,
                name:`${formData.firstName.trim()} ${formData.lastName.trim()}`,
                contact:formData.contact,
                addresses:[address]
            })
            console.log("HERE3");
            console.log(newUser);
            
            await newUser.save();
        }

        return res.json(
            {
                success:true,
                message:"User Registered Successfully!!!.Verify Email"
            },
            {
                status:200
            }
        )

        
    } catch (error) {
        console.error("Error Registering User ",error);
        return res.json(
            {
                success:false,
                message:"Error Registering User"
            },
            {
                status:500
            }
        )
    }
}