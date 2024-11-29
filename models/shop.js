import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: String, required: true },
  image: String,
  availability: { type: Boolean, default: true },
  category: String,
  customization: [
    {
      option: String,
      price: String,
    },
  ],
  featured: {
    type: Boolean,
    default: false,
  },
});

const ShopDetailsSchema = new mongoose.Schema({
  timing: String,
  location: String,
  description:String,
  comments:[String]
});

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  details: ShopDetailsSchema,
  menu: [MenuItemSchema],
  featured: {
    type: Boolean,
    default: false,
  },
  reviews:{
    type:Number,
  }
});

const Shop = (mongoose.models.Shop) || (mongoose.model("Shop", ShopSchema));
export default Shop;
