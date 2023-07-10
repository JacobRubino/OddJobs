const { Profile } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    // come up w/ a name for your function
    // have a query that take a state and or skill
    workers: async (parent, variables) => {
      const location = variables.location;
      const skill = variables.skill;
      const workers = await Profile.find({ location: location, skills: skill })
      console.log(workers)
      return workers
    }
    // that query uses the find op to get all the users that match that critera
    // send the result back
  },

  Mutation: {
    addProfile: async (parent, { name, city, state, email, password }) => {
      const profile = await Profile.create({ name, city, state, email, password });
      const token = signToken(profile);
      return { token, profile };
    },
    addSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
    login: async (parent, { email, password}) => {
      const profile = await Profile.findOne({ email });

      if(!profile) {
        throw new AuthenticationError('No profile was found with that email!');
      }
      const correctPassword = await profile.isCorrectPassword(password);

      if(!correctPassword) {
        throw new AuthenticationError("Incorrect Password!");
      }
      const token = signToken(profile)
      return {token, profile}
    }
  },
};

module.exports = resolvers;
