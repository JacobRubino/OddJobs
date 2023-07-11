const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      // unique: false,
      trim: true,
    },
    skills: {
      type: [String],
      required: false
    },
    rate: {
      type: Number,
      required: false
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true,
      length: 2
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    phone: {
      type: String,
      required: false,
      match: [/^\d{10}$/, 'Must be a valid 10-digit phone number!']
    },
    password: {
      type: String,
      required: true,
    },
  }
);


profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;


//Sudar: Added state in profileseeds.json because state was missing from there