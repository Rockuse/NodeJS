require('module-alias/register');
const routes = require('@src/routes');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(PORT, () => {
  console.log('server is running');
});

module.exports = app;
