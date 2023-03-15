require('module-alias/register');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs')
const {resolve} = require('path')
const { loadPlanetData } = require('@src/planets/planet.models');
const app = require('@src/app');
const { getConfig } = require('../config/config.env');
const URL= process.env.NODE_ENV !== 'production' ? 'localhost' : getConfig('URL')
const PORT = getConfig('PORT') || 8000;
const server = https.createServer({
  key:  fs.readFileSync(resolve(__dirname, '../../key.pem')),
  cert: fs.readFileSync(resolve(__dirname, '../../cert.pem')),
}, app);

mongoose.connection.once('open', () => {
  console.log('MongoDB Connection is ready');
});
mongoose.connection.on('error', (err) => {
  console.error(err);
});
async function start() {
  await mongoose.connect(getConfig('MONGODB_URL'));
  await loadPlanetData();
  server.listen(PORT, URL, () => {
    console.log(`connected to ${process}`);
  });
}
start();
