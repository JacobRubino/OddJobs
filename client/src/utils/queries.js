import { gql } from '@apollo/client';

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
