const { Schema, model } = require('mongoose');

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    skills: {
      type: [String],
      required: true
    },
    rate: {
      type: Number,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  }

);

const Profile = model('Profile', profileSchema);

module.exports = Profile;
