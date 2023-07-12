const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://evansmiller:FinalProject@oddjobs.wwyzdrs.mongodb.net/?retryWrites=true&w=majority'
);

module.exports = mongoose.connection;
