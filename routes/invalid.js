const express = require("express");
const router = express.Router();

router.get("*", (req, res) => {
  res.send("Invalid route");
});

module.exports = router;
