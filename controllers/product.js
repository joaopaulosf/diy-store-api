const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      res.status(204).json({ message: "Products not found" });
    } else {
      res.status(200).json(products);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const productId = req?.params?.productId;
    const product = await Product.findOne({ productId });

    if (!product) {
      res.status(400).json({ message: `Product ID ${productId} not found.` });
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

exports.getByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });

    if (!products.length) {
      return res
        .status(400)
        .json({ message: `Category ${category} not found` });
    } else {
      res.status(200).json(products);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { productId, name, description, price, sale, image, category } =
      req.body;

    // ** To prevent data from being sent to the db **

    // const product = await Product.create({
    //   productId,
    //   name,
    //   description,
    //   price,
    //   sale,
    //   image: { main: image.main, content: image.content },
    //   category,
    // });

    const product = {
      productId,
      name,
      description,
      price,
      sale,
      image: { main: image.main, content: image.content },
      category,
    };

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: "Error adding product. Please check the data sent." });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req?.params?.productId;
    const product = await Product.findOne({ productId });
    const body = req.body;

    if (Object.entries(body).length === 0 || !product) {
      return res.status(400).json({
        message: `Product ID: ${productId} not found or data not sent`,
      });
    }

    const { name, description, price, sale, image, category } = req.body;
    const productUpdated = {
      productId,
      name,
      description,
      price,
      sale,
      image: { main: image.main, content: image.content },
      category,
    };

    // ** To prevent db data from being updated **

    // const result = await Product.findOneAndUpdate(
    //   { productId },
    //   productUpdated,
    //   { new: true }
    // );
    // res.status(200).json({ result });

    res.status(200).json(productUpdated);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: "Error updating product. Please check the data sent." });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const _id = req.params._id;
    const product = await Product.findById(_id);

    if (product === null) {
      return res.status(400).json({ message: "Product not found" });
    }

    // ** To prevent data from being deleted from db **

    // await Product.deleteOne({ _id });

    res.status(200).json({ message: "Product deleted", product });
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: `Error deleting product. Error: ${err.reason}` });
  }
};
