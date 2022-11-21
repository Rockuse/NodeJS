const cors = require('cors');
const path = require('path');

module.exports = (app, express) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.use(express.urlencoded({ extended: false }));
  return app
};
