const { launches } = require('./launches.model');

module.exports = {
  getLaunch: (req, res) => {
    // console.log(launches);
    res.json(Array.from(launches.values()));
  },
};
