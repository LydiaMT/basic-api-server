'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const clothesRoute = require('./routes/clothes.js');
const foodRoute = require('./routes/food.js');

const notFound =require('./errors/404.js');
const errors = require('./errors/500.js');

app.use(express.json());

app.use(logger);
app.use(clothesRoute);
app.use(foodRoute);

app.use('*', notFound);
app.use(errors);

module.exports = {
  server:app,
  start: port => {
    app.listen(port, () => console.log(`server up on http://localhost:${port}`));
  }
};
