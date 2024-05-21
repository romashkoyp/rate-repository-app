import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          ...RepositoryFields
          createdAt
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

export const GET_REVIEWS = gql`
  query Reviews($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
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

// export const GET_REPOSITORIES = gql`
//   query {
//     repositories {
//       edges {
//         node {
//           ...RepositoryFields
//         }
//       }
//     }
//   }
//   ${REPOSITORY_FIELDS}
// `;