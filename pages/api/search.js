import dbConnect from "@/lib/dbConnect";
import Shop from "@/models/shop";

export default async function handler(req, res) {
  await dbConnect();
  const { type, query } = req.body;
  console.log(req.body.type);
  console.log(req.body.query);
  

  try {
    if (type === "restaurant") {
      const shops = await Shop.find({
        name: { $regex: query, $options: "i" }, 
      });

      if (shops.length > 0) {
        res.status(200).json({ message: "Found", found: shops });
      } else {
        res.status(404).json({ message: "No restaurants found" });
      }
    } else if (type === "foodItem") {
      
      const shops = await Shop.find({
        "menu.name": { $regex: query, $options: "i" },
      });

      const matchingMenuItems = shops.flatMap((shop) => {
        return shop.menu
          .filter((menuItem) => new RegExp(query, "i").test(menuItem.name))
          .map((menuItem) => ({
            ...menuItem.toObject(),
            shopName: shop.name,
            shopId: shop._id,
            shopImage: shop.image,
          }));
      });

      if (matchingMenuItems.length > 0) {
        res.status(200).json({ message: "Found", items: matchingMenuItems });
      } else {
        res.status(404).json({ message: "No food items found" });
      }
    } else {
      res.status(400).json({ message: "Invalid search type" });
    }
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
