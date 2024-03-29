const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./Routes/userRoute");
const connectdb = require("./Utils/db");
const bodyParser = require("body-parser");
// const config = require('./config');
require('dotenv').config()
// const PORT = config.PORT;
const port = process.env.PORT
const hotelRoute = require('./Routes/hotelRoutes');
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true })); //enable CORS


app.use("/user", userRoute);
app.use('/hotels',hotelRoute);
app.use("/", (req, res) => {
  res.send("Welcome to MY SITE");
});


app.listen(port, async () => {
  try {
    await connectdb();
    console.log(`App is running on Port ${port}`);
  } catch (error) {
    console.log("Error => ", error);
  }
});
