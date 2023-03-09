const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const cookieSession= require('cookie-session')

module.exports = (app, express) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.use(express.urlencoded({ extended: false }));
  app.use(helmet());
  app.use(cookieSession({
    name:'session',
    maxAge: 1000 * 60 * 60 * 24,
    keys:['tes']
  }))
  return app
};
