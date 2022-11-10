const cors = require('cors');

module.exports = (app, express) => {
  app.use(cors({
    origin: '*',
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
