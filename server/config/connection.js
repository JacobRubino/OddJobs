const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI || ATLAS_URI
);

module.exports = mongoose.connection;
