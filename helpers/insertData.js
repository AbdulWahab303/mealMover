import dbConnect from "../lib/dbConnect.js";
import Shop from "../models/shop.js";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const init = async () => {
  try {
    await dbConnect();
    console.log("Connected to the database.");

    const dataPath = path.join(__dirname, "shopsData.json");
    const restaurants = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    await Shop.insertMany(restaurants);
    console.log("Data saved successfully.");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

// Execute the function
init();
