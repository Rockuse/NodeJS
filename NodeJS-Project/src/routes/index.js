require('module-alias');
const friends = require('@controller/friends');
const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Birds home page');
});
// friends
router.get('/friends', friends.getAll);
// router.get('/friends/:id', friends.getAll);
router.post('/friends', friends.addOne);
router.put('/friends/:id', friends.getAll);
router.delete('/friends/:id', friends.getAll);

// get Image
router.get('/site', (req, res) => {
  res.sendFile(path.join(__dirname, '../..', 'public/doc', '15.1 skimountain.jpg'));
});
module.exports = router;
