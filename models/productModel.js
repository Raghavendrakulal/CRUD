const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    id: {
        type: mongoose.Schema.Types.ObjectId, // Assuming you want to use ObjectId for the ID field
        index: true, // Optional: Add an index to the ID for better performance
      },
    name: {
      type: String,
      required: [true, "Please enter the name"]
    },
    description: {
      type: String,
      required: [true, "Please enter the description"],
    }
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
