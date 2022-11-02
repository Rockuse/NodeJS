require('module-alias/register');
const { nanoid } = require('nanoid');
const { friends } = require('@storage/storage.js');

module.exports = {
  getAll: (req, res) => {
    res.send(friends);
  },
  addOne: (req, res) => {
    const id = nanoid(16);
    res.send({
      id,
      success: 'success',
    });
  },
};
