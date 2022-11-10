const { habitablePlanets } = require('@storage/storage');

const planets = {
  getAll: (req, res) => [
    res.json({
      status: 'success',
      data: habitablePlanets,
    }),
  ],

};

module.exports = planets;
