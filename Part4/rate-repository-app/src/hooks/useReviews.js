import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = () => {
  const { data, error, loading } = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
  });

  return (
    { data, loading, error }
  );
};

export default useReviews;