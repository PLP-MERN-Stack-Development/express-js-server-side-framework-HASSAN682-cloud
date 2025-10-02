require('dotenv').config();


const express = require('express');
const app = express();
const PORT = 3000;

const logger = require('./middleware/logger');
const authenticate = require('./middleware/auth');
const productRoutes = require('./routes/products');

app.use(express.json());
app.use(logger);
app.use('/api/products', authenticate, productRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.use(express.json());
app.use(logger);
app.use('/api/products', authenticate, productRoutes);
app.use(errorHandler); // Always last


