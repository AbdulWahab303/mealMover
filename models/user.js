import mongoose from "mongoose";
import Order from "./orders";

// const CartItemSchema = new mongoose.Schema({
//   menuItemId: mongoose.Schema.Types.ObjectId,
//   name: String,
//   quantity: Number,
//   price: Number,
//   totalPrice: Number,
//   customizations: [String],
// });

// const CartSchema = new mongoose.Schema({
//   items: [CartItemSchema],
//   totalPrice: Number,
//   shopId: mongoose.Schema.Types.ObjectId,
// });

// const OrderSchema = new mongoose.Schema({
//   shopId: mongoose.Schema.Types.ObjectId,
//   shopName: String,
//   items: [CartItemSchema],
//   totalPrice: Number,
//   status: { type: String, default: "Pending" },
//   timestamp: { type: Date, default: Date.now },
// });

const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  addresses: [
    {
      street:String,
      city: String,
      state:String,
      zip: String,
      country: String,
      houseNo:String
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const User = (mongoose.models.User) || (mongoose.model("User", UserSchema));
export default User;




