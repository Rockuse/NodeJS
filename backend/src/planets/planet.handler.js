const { habitablePlanets } = require('@storage/storage');

const planets = {
  getAll: (req, res) => [
    res.json(
      habitablePlanets
    ),
  ],

};

module.exports = planets;
