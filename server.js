const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
const root = require("./routes/root");
const invalid = require("./routes/invalid");

app.use(cors());

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", root);
app.all("*", invalid);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
