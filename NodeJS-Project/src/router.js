require('module-alias');
const planets = require('./planets/planet.routes');
const site = require('./sites/sites.routes');
const friends = require('./friends/friend.routes');

module.exports = (app, server) => {
  app.use('/sites', site(server));
  app.use('/friends', friends(server));
  app.use('/planets', planets(server));
  return app;
};
