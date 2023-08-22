const express = require("express");
const router = express.Router();
const { addProduct, getAllProducts } = require("../controllers/product");

router.route("/").get(getAllProducts).post(addProduct);

module.exports = router;
