const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

//Load environment vars
dotenv.config({ path: './config/config.env' });

//Connect to MongoDB
connectDB();

//Route Files
const bootcamps = require('./routes/bootcamps.js');

const PORT = process.env.PORT || 5000;

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Routes
//Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

//Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...Happy Hacking!!`);
});

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server and exit process
  server.close(() => process.exit(1));
});
