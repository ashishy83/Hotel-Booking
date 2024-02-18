const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./Routes/userRoute");
const connectdb = require("./Utils/db");
const bodyParser = require("body-parser");
const config = require('./config');
const PORT = config.PORT;
const hotelRoute = require('./Routes/hotelRoutes');
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ origin: "*", credentials: true })); //enable CORS


app.use("/", (req, res) => {
  res.send("Welcome to MY SITE");
});
app.use("/v1/users", userRoute);
app.use('/v1/hotels',hotelRoute);


app.listen(PORT, async () => {
  try {
    await connectdb();
    console.log(`App is running on Port ${PORT}`);
  } catch (error) {
    console.log("Error => ", error);
  }
});
