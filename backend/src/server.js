require('dotenv').config();
require('module-alias/register');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs')
const {resolve} = require('path')
const { loadPlanetData } = require('@src/planets/planet.models');
const app = require('@src/app');

const MONGODB_URL = 'mongodb+srv://rockuse-api:2UdeBlbxHSFlHMdn@rockuse-api.lbzpkht.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8000;
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
  await mongoose.connect(MONGODB_URL);
  await loadPlanetData();
  server.listen(PORT, process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0', () => {
    console.log(`connected to ${process.env.NODE_ENV}`);
  });
}
start();
