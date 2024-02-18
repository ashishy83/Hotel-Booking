const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, maxlength: 20 },
    name: { type: String, required: true, maxlength: 30 },
    address: { type: String, required: true },
    des: { type: String, required: true },
    rating: { type: Number, required: true },
    amenities: { type: String, required: true },
    contact_info: { type: String, required: true },
    hotel_image: { type: String, required: true },
  },
  { timestamps: true }
);

const Hotels = mongoose.model('hotels',hotelSchema);

module.exports=Hotels;
