import User from "@/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import dbConnect from "@/lib/dbConnect";
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    console.log("HERE!!!!!!");
    
  if (req.method !== "PATCH") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  await dbConnect();
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const id = session.user._id;
  console.log(id);
  
  const updatedData = req.body.updatedData;
  console.log(updatedData);
  

  try {
    // Retrieve the user from the database
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Construct the updates dynamically
    const updates = {};
    if (updatedData.firstName || updatedData.lastName) {
      updates.name = `${updatedData.firstName || user.name.split(" ")[0]} ${
        updatedData.lastName || user.name.split(" ")[1]
      }`;
    }
    if (updatedData.contactNo) {
      updates.contact = updatedData.contactNo;
    }
    if (updatedData.addresses) {
      updates.addresses = updatedData.addresses;
    }
    if(updatedData.password){
        updates.password=await bcrypt.hash(updatedData.password,10);
    }
    Object.keys(updatedData).forEach((key) => {
      if (!["firstName", "lastName", "addresses", "contactNo","password"].includes(key)) {
        updates[key] = updatedData[key];
      }
    });
    console.log("UPDATESSS");
    console.log(updates);
    console.log("UPDATESSS");
    

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });

    return res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
