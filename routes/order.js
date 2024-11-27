const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/order');
const router = express.Router();

router.post('/', createOrder);
router.get('/my-orders', getUserOrders);

module.exports = router;
