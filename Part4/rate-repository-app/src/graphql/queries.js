import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS, USER_FIELDS, REVIEW_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
  query getCurrentUser($includeReviews: Boolean = true) {
    me {
      ...UserFields
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
            repository {
              fullName
            }
          }
        }
      }
    }
  }
  ${USER_FIELDS}
  ${REVIEW_FIELDS}
`;

export const GET_REVIEWS = gql`
  query Reviews($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            ...ReviewFields
            user {
              ...UserFields
            }
          }
        }
      }
    }
  }
  ${USER_FIELDS}
  ${REVIEW_FIELDS}
`;