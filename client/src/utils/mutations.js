import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation AddProfile($name: String!, $email: String!, $city: String!, $state: String!, $password: String!, $skills: [String]!, $rate: Int, $phone: String) {
    addProfile(name: $name, email: $email, city: $city, state: $state, password: $password, skills: $skills, rate: $rate, phone: $phone) {
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

export const LOGIN_CONTRACTOR = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
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


export const GET_FEEDBACK = gql`
  query GetFeedback {
    feedback {
      _id
      dateOfService
      userName
      starRating
      review
    }
  }
`;