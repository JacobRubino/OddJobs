import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation AddProfile($name: String!, $email: String!, $city: String!, $state: String!, $password: String!) {
    addProfile(name: $name, email: $email, city: $city, state: $state, password: $password) {
      token
      profile {
        _id
        name
      }
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
      starRating
      review
    }
  }
`;