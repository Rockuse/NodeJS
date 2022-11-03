require('module-alias/register');
const routes = require('@src/routes');
const express = require('express');
const path = require('path');

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use('/', routes);

module.exports = app;
