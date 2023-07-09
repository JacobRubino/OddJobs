const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    skills: [String]!
    location: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    workers(location: String, skill: String): [Profile]
    contractorNames: [String]!  # Add the contractorNames field
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
