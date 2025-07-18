const mongoose = require("mongoose"); //Backend
const express = require("express");
const cors = require("cors");
const routes = require("./routes/api/index");
const backend = express();
const http = require("http").Server(backend);


backend.use(express.json()); //data in json form
backend.use(
  cors({
    origin: "*",
  })
);

backend.use(routes);

//Step 1 to connect to the database
mongoose
  .connect(
    "mongodb+srv://maankaran049:Y1q4BhBBkIB0SW3B@karan.wzws6hi.mongodb.net/"
  )
  .then(() => {
    const PORT = 5100;
    http.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log("Connected to MongoDB Atlas");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });
