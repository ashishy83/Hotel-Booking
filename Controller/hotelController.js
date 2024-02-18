const Hotels = require("../models/hotelModel");
const store = require("../Utils/store");

const addhotelsData = async (req, res) => {
  try {
    await Hotels.insertMany(store);
    console.log("Data added successfully");
    res.send("Data added successfully.");
  } catch (error) {
    console.log("Error adding Data => ", error);
    res.status(500).send("Error adding data to database");
  }}

  const getAllhotels = async (req, res) => {
    try {
      const data = await Hotels.find({});
      res.json({
        details: data,
        status: 200,
      });
    } catch (error) {
      console.log("Error fetching data => ", error);
      res.status(400).json({
        message: error,
      });
    }
  };

  const gethotelsByID = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (id) {
        const data = await Hotels.findOne({ id });
        res.json({
          details: data,
          status: 200,
        });
      }
    } catch (error) {
      console.log("error fetching data by id => ", error);
      res.status(400).json({
        message: error,
      });
    }
  };


module.exports = {
  addhotelsData,
  getAllhotels,
  gethotelsByID,
};
