const Product = require('../models/product');

const { filterQuery } = require('../utils/query');

const getAllProducts = async (req, res) => {
  let query = Product.find();
  query = filterQuery(query, req.query);

  const products = await query;
  res.json(products);
};

const createProduct = async (req, res) => {
  const { name, price, description, category, stock } = req.body;

  const product = new Product({ name, price, description, category, stock });
  await product.save();

  res.status(201).json({ message: 'Product created', product });
};

module.exports = { getAllProducts, createProduct };
