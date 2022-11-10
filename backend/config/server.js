require('module-alias/register');
const http = require('http');
const loadPlanetData = require('@src/planets/planet.models');
const app = require('./app');

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
async function start() {
  await loadPlanetData();
  server.listen(PORT, process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0', () => {
    console.log(`connected to ${process.env.NODE_ENV}`);
  });
}
start();
