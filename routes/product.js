const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/product');
const router = express.Router();
const { roleCheck } = require('../middlewares/role');

router.post('/', protect, roleCheck(['admin']), createProduct);
router.get('/', getAllProducts);

module.exports = router;
