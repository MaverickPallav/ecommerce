const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');
const router = express.Router();

router.post('/', createOrder);
router.get('/my-orders', getUserOrders);

module.exports = router;
