import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) { 
    repository(id: $id) {
      ...RepositoryFields
      url
    }
  }
  ${REPOSITORY_FIELDS}
`;

export const ME = gql`
  query {
    me {
      id
      username
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