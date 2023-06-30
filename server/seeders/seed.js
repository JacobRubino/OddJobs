const db = require('../config/connection');
const { Profile, State } = require('../models');

const profileSeeds = require('./profileSeeds.json');
const stateSeeds = require ('./states.json')

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
