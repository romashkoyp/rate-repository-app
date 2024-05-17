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

export const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) { 
    repository(id: $id) {
      id
      fullName
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      ownerAvatarUrl
      url
    }
  }
`;

// export const GET_REPOSITORY = gql`
//   query {
//     repository(id: "jaredpalmer.formik") {
//       id
//       fullName
//       description
//       language
//       stargazersCount
//       forksCount
//       reviewCount
//       ratingAverage
//       ownerAvatarUrl
//       url
//     }
//   }
// `;