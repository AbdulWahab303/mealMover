import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import NextAuth from "next-auth/next";



export const authOptions={
    providers:[
        CredentialsProvider({
            id:"credentials",
            name:"Credentials",
            credentials:{
                email:{
                    label:"email",
                    type:"text"
                },
                password:{
                    label:"password",
                    type:"password"
                },
            },
            async authorize(credentials){
                console.log(credentials);
                
                await dbConnect();
                try{
                    const user=await User.findOne(
                        {
                            $or:[
                                {
                                    email:credentials.email
                                },
                                {
                                    username:credentials.username
                                }
                            ]
                        }
                    )
                    console.log(user);
                    
                    if(!user){
                        throw new Error("No user found with this email");
                    }
                    const isPasswordCorrect=await bcrypt.compare(credentials.password,user.password);   
                    if(isPasswordCorrect){
                        return user;
                    }
                    else{
                        throw new Error("Incorrect Password");
                    }

                }
                catch(err){
                    throw new Error(err);

                }
            }
        })
    ],
    callbacks:{
        async session({session,token}){
            if(token){
                session.user._id=token._id;
                session.user.username=token.username;
            }



            return session
        },
        async jwt({token,user}) {

            if(user){
                token._id=user._id?.toString();
                token.username=user.username;
            }
            return token;
        }
    },
    pages:{
        signIn:"/sign-in"
    },
    session:{
        strategy:"jwt"
    },
    secret:process.env.NEXT_AUTH_SECRET,
}

export default NextAuth(authOptions);

