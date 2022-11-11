require('module-alias/register');
const { launch } = require('@storage/storage.js');

const launches = new Map();

launch.flightNumber = 100;
launch.launchDate = new Date('2030-12-12');
launch.mission = 'Kepler Exploration X';
launch.rocket = 'Explorer IS1';
launch.upcoming = true;
launch.success = true;
launch.customers = ['ZTM', 'NASA'];
launch.target = 'Kepler-442 b';

launches.set(launch.flightNumber, launch);

module.exports = { launches };
