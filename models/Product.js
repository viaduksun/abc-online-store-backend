const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    _id: {
      type: String
    },
    itemNo: {
      type: String,
    },
    enabled: {
      type: Boolean,
      required: true,
      default: true
    },
    // name: {
    //   type: String,
    //   required: true
    // },
    // currentPrice: {
    //   type: Number,
    //   default: 0,
    //   required: true
    // },
    // previousPrice: {
    //   type: Number,
    //   default: 0
    // },
    // categories: {
    //   type: String,
    //   required: true
    // },
    // imageUrls: [
    //   {
    //     type: String,
    //     required: true
    //   }
    // ],
    // quantity: {
    //   type: Number,
    //   required: true,
    //   default: 0
    // },
    color: {
      type: String
    },
    sizes: {
      type: String
    },
    productUrl: {
      type: String
    },
    // brand: {
    //   type: String
    // },
    manufacturer: {
      type: String
    },
    manufacturerCountry: {
      type: String
    },
    seller: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

ProductSchema.index({ "$**": "text" });

module.exports = Product = mongoose.model("products", ProductSchema);
