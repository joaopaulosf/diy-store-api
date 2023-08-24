const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  getProduct,
  getCategories,
  getByCategory,
} = require("../controllers/product");

router.route("/").get(getAllProducts).post(addProduct);
router.get("/categories", getCategories);
router.get("/category/:category", getByCategory);
router.get("/:productId", getProduct);

module.exports = router;
