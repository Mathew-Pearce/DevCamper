const express = require('express');
const dotenv = require('dotenv');

//Route Files
const bootcamps = require('./routes/bootcamps.js');

//Load environment vars
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;

const app = express();

//Routes
//Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...Happy Hacking!!`);
});
