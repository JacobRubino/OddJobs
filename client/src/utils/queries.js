import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation AddProfile($name: String!, $email: String!, $city: String!, $state: String!, $password: String!, $rate: Int, $skills: [String!]!, $phoneNumber: String!) {
    addProfile(name: $name, email: $email, city: $city, state: $state, password: $password, rate: $rate, skills: $skills, phone: $phoneNumber) {
      token
      profile {
        _id
        name
        rate
        skills
        phone
      }
    }
  }
`;

export const GET_WORKERS = gql`
  query GetWorkers($state: String!) {
    name(state: $state) {
      _id
      name
      skills
      email
      state
      phone
    }
  }
`;

export const ADD_SKILL = gql`
  mutation AddSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const ADD_FEEDBACK = gql`
  mutation AddFeedback($contractorName: String!, $dateOfService: String!, $userName: String!, $starRating: Int!, $review: String!) {
    addFeedback(contractorName: $contractorName, dateOfService: $dateOfService, userName: $userName, starRating: $starRating, review: $review) {
      _id
      contractorName
      dateOfService
      userName
      starRating
      review
    }
  }
`;

export const GET_CONTRACTOR_NAMES = gql`
  query GetContractorNames {
    contractorNames
  }
`;

export const GET_FEEDBACK = gql`
  query GetFeedback {
    feedback {
      _id
      contractorName
      dateOfService
      userName
      starRating
      review
    }
  }
`;