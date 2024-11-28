import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: "Shop", required: true },
  shopName: String,
  items: [
    {
      menuItemId: mongoose.Schema.Types.ObjectId,
      name: String,
      quantity: Number,
      price: Number,
      totalPrice: Number,
      customizations: [String],
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
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
