const handler = require('./sites.handler');

// const router = express.Router();

module.exports = (router) => {
  router.get('/', handler.getData);
  return router;
};
