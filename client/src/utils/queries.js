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