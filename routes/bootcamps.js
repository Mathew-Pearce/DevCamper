const express = require('express');

const router = express.Router();

//Get all bootcamps
router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps.' });
});
//Get a single bootcamp
router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Show one bootcamp ${req.params.id}.` });
});
//Update a bootcamp
router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}.` });
});
//Create a bootcamp
router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create a bootcamp.' });
});
//Delete a bootcamp
router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}.` });
});

module.exports = router;
