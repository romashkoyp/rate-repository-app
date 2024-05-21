import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy = 'CREATED_AT', orderDirection = 'DESC') => {
  const variables = { orderBy, orderDirection };

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  return (
    { repositories: data ? data.repositories : null, loading, error }
  );
};

export default useRepositories;