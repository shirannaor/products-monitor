const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
require("colors");

const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const products = require('./routes/products');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/products', products);

app.use(errorHandler);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
