const cors = require('cors');
const path = require('path');
const helmet = require('helmet');

module.exports = (app, express) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.use(express.urlencoded({ extended: false }));
  app.use(helmet());
  return app
};
