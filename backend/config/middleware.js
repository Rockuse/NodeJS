const cors = require('cors');

module.exports = (app, express) => {
  app.use(cors({
    origin: 'http://localhost:3000',
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
