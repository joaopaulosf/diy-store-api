const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  getProduct,
  getCategories,
  getByCategory,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

router.route("/").get(getAllProducts).post(addProduct);
router.get("/categories", getCategories);
router.get("/category/:category", getByCategory);
router
  .get("/:productId", getProduct)
  .patch("/:productId", updateProduct)
  .put("/:productId", updateProduct)
  .delete("/:_id", deleteProduct);

module.exports = router;
