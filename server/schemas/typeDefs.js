const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    skills: [String]!
    state: String
    city: String
    email: String
    password: String
    phone: String
  }
  
  
  type Feedback {
    _id: ID
    contractorName: String
    dateOfService: String
    userName: String
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
    name(state: String, skill: String): [Profile]
    contractorNames: [String]!
    feedback: [Feedback]! 
  }

  type Mutation {
    addProfile(
      name: String!
      email: String!
      city: String!
      state: String!
      password: String!
      skills: [String]
      rate: Int
      phone: String
    ): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
    login(email: String!, password: String!): Auth
    addFeedback(
      contractorName: String!
      dateOfService: String!
      userName: String!
      starRating: Int!
      review: String!
    ): Feedback!
  }
  
`;

module.exports = typeDefs;


//added type feedback and addfeedback under Mutation