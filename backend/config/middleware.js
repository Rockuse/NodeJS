const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const cookieSession = require('cookie-session')
const passport = require('passport')
const { Strategy } = require('passport-google-oauth20');
const { AUTH_OPTIONS, AuthMethod, AuthRouter } = require('./auth.config');
module.exports = (app, express) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.use(express.urlencoded({ extended: false }));
  passport.use(new Strategy(AUTH_OPTIONS, AuthMethod.verifyCallback))
  app.use(helmet());
  app.use(passport.initialize());
  app.use('/', AuthRouter(express.Router(),passport))
  app.use(cookieSession({
    name: 'session',
    maxAge: 1000 * 60 * 60 * 24,
    keys: ['tes']
  }))
  return app
};
