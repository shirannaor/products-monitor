const express = require('express');
const { getProducts, getProduct, addProduct, deleteProduct } = require('../controllers/products');

const router = express.Router();

router
  .route('/')
  .get(getProducts)
  .post(addProduct);

router
  .route('/:id')
  .get(getProduct)
  .delete(deleteProduct);

module.exports = router;
