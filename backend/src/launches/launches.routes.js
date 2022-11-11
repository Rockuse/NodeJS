const handler = require('./launches.handler');

module.exports = (router) => {
  router.get('/', handler.getLaunch);
  return router;
};
