const express = require('express');
const { createOrder, verifyPayment } = require('../controllers/payment');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.post('/create-order', protect, createOrder);

router.post('/verify-payment', protect, verifyPayment);

module.exports = router;