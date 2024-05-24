const express = require("express");
const connectDB = require("./DbConnection.js");
require("dotenv").config();

const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT;

app.use(cors());

connectDB();

// Define a Mongoose model (replace ModelName and schema definition with your actual model)
const Scraping = mongoose.model(
  "articles",
  new mongoose.Schema({
    title: String,
    link: String,
    description: String,
    image: String
  })
);

app.get("/data", async (req, res) => {
  try {
    const data = await Scraping.find();
    res.json(data);
  } catch (error) {
    console.error("Error reading data from database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
