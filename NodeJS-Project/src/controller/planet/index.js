require('module-alias/register');
const parse = require('csv-parser');
const fs = require('fs');
const { resolve } = require('path');
const { habitablePlanets } = require('@storage/storage');

function isHabitable(planet) {
  return planet.koi_disposition === 'CONFIRMED' && planet.koi_insol > 0.36 && planet.koi_insol < 1.11
  && planet.koi_prad < 1.6;
}

fs.createReadStream(resolve(__dirname, '../../public/doc/kepler_data.csv'))
  .pipe(parse({
    comment: '#',
  })).on('data', (data) => {
    if (isHabitable(data) === true) habitablePlanets.push(data);
  }).on('error', (err) => {
    console.log(err);
  })
  .on('end', () => {
    console.log(`${habitablePlanets.length} habitable planets found!`);
  });
