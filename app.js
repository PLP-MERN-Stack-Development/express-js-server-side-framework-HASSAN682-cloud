const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const authenticate = require('./middleware/auth');
const productRoutes = require('./routes/products');

app.use(express.json());
app.use(logger);
app.use('/api/products', authenticate, productRoutes);
app.get('/', (req, res) => res.send('Hello World'));
app.use(errorHandler);

module.exports = app;
