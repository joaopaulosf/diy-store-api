require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
const root = require("./routes/root");
const invalid = require("./routes/invalid");
const product = require("./routes/product");

app.use(cors());

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", root);
app.use("/", root);
app.use("/products", product);

// last
app.all("*", invalid);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});
