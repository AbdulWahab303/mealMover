import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: "Shop", required: true },
  shopName: String,
  items: [
    {
      menuItemId: mongoose.Schema.Types.ObjectId,
      name: String,
      quantity: Number,
      price: Number,
      customizations: [String],
      image:String,
    },
  ],
  totalPrice: Number,
  status: {
    type: String,
    default: "Pending",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  paymentMethod:{
    type:String,
  },
});

const Order =(mongoose.models.Order) ||(mongoose.model("Order", OrderSchema));
export default Order;
