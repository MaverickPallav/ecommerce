const Order = require('../models/order');

const createOrder = async (req, res) => {
  const { products, totalPrice } = req.body;

  const user = req.user.id;

  const order = new Order({ user, products, totalPrice });
  await order.save();

  res.status(201).json({ message: 'Order placed successfully', order });
};

const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('products.product');
  
  res.json(orders);
};

module.exports = { createOrder, getUserOrders };
