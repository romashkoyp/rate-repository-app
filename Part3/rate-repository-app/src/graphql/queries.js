import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          id
          language
          reviewCount
          stargazersCount
          description
          forksCount
          ownerAvatarUrl
          ratingAverage
        }
      }
    }
  }
`;