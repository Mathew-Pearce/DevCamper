const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger.js');

//Route Files
const bootcamps = require('./routes/bootcamps.js');

//Load environment vars
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000;

const app = express();

//use logger middleware
app.use(logger);

//Routes
//Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...Happy Hacking!!`);
});
