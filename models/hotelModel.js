const mongoose = require("mongoose");

// Define hotel schema
const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  des: { type: String, required: true },
  rating: { type: Number, required: true },
  amenities: { type: [String], required: true },
  contact_info: { type: String, required: true },
  hotel_image: { type: String, required: true },
  id: { type: String, required: true },
});
const Hotels = mongoose.model("hotels", hotelSchema);

module.exports = Hotels;
