import { gql } from '@apollo/client';

export const GET_CONTRACTOR_NAMES = gql`
  query ContractorNames {
    contractorNames
  }
`;
