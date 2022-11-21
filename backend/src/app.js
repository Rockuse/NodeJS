require('module-alias/register');
const express = require('express');

const app = express();

require('@config/middleware')(app, express);
require('@routes/router')(app, express); // Router
// app.use('/', routes());

module.exports = app;
