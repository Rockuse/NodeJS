require('module-alias/register');
const express = require('express');
// const path = require('path');

const app = express();

// app.use('/site', express.static(path.join(__dirname, 'public')));
require('@config/middleware')(app, express);
require('@src/router')(app, express.Router()); // Router

// app.use('/', routes());

module.exports = app;
