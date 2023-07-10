import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
    query allProfiles {
        profiles {
            _id
            name
            skills
            city
            state
            rating
        }
    }
`;

export const QUERY_SINGLE_PROFILE = gql`
    query singleProfile($profileId: ID!) {
        profile(profileId: $profileId) {
            _id
            name
            skills
            city
            state
            rating
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