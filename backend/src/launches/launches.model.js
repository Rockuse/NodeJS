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

let latestFlightNumber = 100;
launches.set(launch.flightNumber, launch);
function getAllLaunches() {
  return Array.from(launches.values());
}
function addDataLaunch(item) {
  latestFlightNumber += 1;
  launches.set(latestFlightNumber, Object.assign(item, {
    flightNumber: latestFlightNumber,
    upcoming: true,
    success: true,
    customers: ['Zero To Mastery', 'NASI'],
  }));
}

function existLaunchById(id) {
  return launches.has(id);
}
function abortLaunchById(id) {
  const aborted = launches.get(id);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}
module.exports = {
  getAllLaunches, addDataLaunch, existLaunchById, abortLaunchById,
};
