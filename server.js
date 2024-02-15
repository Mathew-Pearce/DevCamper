const express = require('express');
const dotenv = require('dotenv');

//Load environment variables
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;

//Initialize Express
const app = express();

//Routes
//Get all bootcamps
app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps.' });
});
//Get a single bootcamp
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Show one bootcamp ${req.params.id}.` });
});
//Update a bootcamp
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}.` });
});
//Create a bootcamp
app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create a bootcamp.' });
});
//Delete a bootcamp
app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}.` });
});

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...Happy Hacking!!`);
});
