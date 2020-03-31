const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');

exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json(products);
});

exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404));

  res.status(200).json({ success: true, data: product });
});

exports.addProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, data: product });
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  // findByIdAndDelete wont trigger the cascade remove middleware
  const product = await Product.findById(req.params.id);

  if (!product) return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404));

  product.remove();

  res.status(200).json({ success: true, data: {} });
});
