const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
  // process.env.MONGODB_URI || 'mongodb+srv://evansmiller:<FinalProject>@oddjobs.wwyzdrs.mongodb.net/?retryWrites=true&w=majority'
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/OddJobs'
);

module.exports = mongoose.connection;
