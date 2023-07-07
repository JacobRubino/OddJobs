import {gql} from '@apollo/client'

export const ADD_PROFILE = gql`
    mutation addProfile($name: String!, $email: String!, $city: String!, $state: String!, $password: String!) {
        addProfile(name: $name, email: $email, city: $city, state: $state, $password){
            token
            profile {
                _id
                name
            }
        }
    }
`

export const ADD_SKILL = gql`
    mutation addSkill($profileId: ID!, $skill: String!) {
        addSkill(profileId: $profileId, skill: $skill) {
            _id
            name
            skills
        }
    }
`

export const LOGIN_CONTRACTOR = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            profile {
                _id
                name
            }
        }
    }
`