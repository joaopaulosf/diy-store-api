const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  if (!products) {
    return res.status(204).json({ message: "Products not found" });
  }

  res.json(products);
};

const addProduct = async (req, res) => {
  if (!req.body) {
    res.json({ message: "Data is undefined" });
  }

  try {
    const { productId, name, description, price, sale, image } = req.body;
    const result = await Product.create({
      productId,
      name,
      description,
      price,
      sale,
      image: { main: image.main, content: image.content },
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAllProducts, addProduct };
