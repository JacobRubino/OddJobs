const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    skills: [String]!
    location: String
    email: String
    password: String
    state: String # Add the "state" field here
  }

  
  type Feedback {
    _id: ID
    contractorName: String
    starRating: Int
    review: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    workers(location: String, skill: String): [Profile]
    contractorNames: [String]!
    feedback: [Feedback]! # Add the feedback query
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
    login(email: String!, password: String!): Auth
    addFeedback(contractorName: String!, starRating: Int!, review: String!): Feedback! # Add the addFeedback mutation
  }
`;

module.exports = typeDefs;


//added type feedback and addfeedback under Mutation