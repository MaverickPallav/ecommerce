const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');
const router = express.Router();
const { roleCheck } = require('../middlewares/roleMiddleware');

router.post('/', protect, roleCheck(['admin']), createProduct);
router.get('/', getAllProducts);

module.exports = router;
