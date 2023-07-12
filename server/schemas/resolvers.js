const { Profile, Feedback } = require('../models');
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


    //Sudar- added contractornames to pull them into feedback page
    contractorNames: async () => {
      const profiles = await Profile.find();
      return profiles.map((profile) => profile.name);
    },

    feedback: async () => {
      return Feedback.find();
    },
  

    // come up w/ a name for your function
    // have a query that take a state and or skill
    name: async (_, { state }) => {
      try {
        let query = {};
        if (state) {
          query.state = state;
        }
        const workers = await Profile.find(query);
        return workers;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to retrieve profiles.');
      }
    }
  },

  Mutation: {
    addProfile: async (parent, { name, city, state, email, password, skills, rate, phone }) => {
      const profile = await Profile.create({ name, city, state, email, password, skills, rate, phone });
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
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile was found with that email!');
      }
      const correctPassword = await profile.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect Password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    //Added addfeedback function so we can save feedback
    addFeedback: async (parent, { contractorName, starRating, review }) => {
      try {
        const newFeedback = new Feedback({
          contractorName,
          starRating,
          review,
        });

        const savedFeedback = await newFeedback.save();
        return savedFeedback;
      } catch (error) {
        console.error(error); 
        throw new Error('Failed to add feedback.');
      }
    },
  },
};

module.exports = resolvers;