const Product = require("../models/Product");

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(204).json({ message: "Products not found" });
    }

    res.json(products);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    const productId = req?.params?.productId;
    const product = await Product.findOne({ productId });

    if (!product) {
      return res
        .status(400)
        .json({ message: `Product ID ${productId} not found.` });
    }

    res.json(product);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports.getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports.getByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });

    if (!products.length) {
      return res
        .status(400)
        .json({ message: `Category ${category} not found` });
    }

    res.json(products);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports.addProduct = async (req, res) => {
  try {
    const { productId, name, description, price, sale, image } = req.body;

    const product = await Product.create({
      productId,
      name,
      description,
      price,
      sale,
      image: { main: image.main, content: image.content },
    });

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: "Error adding product. Please check the data sent." });
  }
};
