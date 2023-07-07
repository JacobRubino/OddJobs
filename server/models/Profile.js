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
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true,
      length: 2
    }
  }

);

const Profile = model('Profile', profileSchema);

module.exports = Profile;
