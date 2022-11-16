/* eslint-disable no-restricted-globals */
const model = require('./launches.model');

module.exports = {
  getLaunch: (req, res) => {
    // console.log(launches);
    res.json(model.getAllLaunches());
  },
  addLaunch: (req, res) => {
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);
    if (!launch.launchDate || !launch.mission || !launch.target || !launch.target) {
      return res.status(400).json({ error: 'Missing required launch property' });
    }
    if (isNaN(launch.launchDate)) {
      return res.status(400).json({ error: 'Invalid launch date' });
    }
    model.addDataLaunch(launch); // Add data
    return res.status(201).json(launch);
  },
  deleteLaunch: (req, res) => {
    const id = Number(req.params.id);
    if (!model.existLaunchById(id)) return res.status(404).json({ error: 'Launch is not found' });
    model.abortLaunchById(id);
    return res.status(201).json({ ok: true });
  },
};
