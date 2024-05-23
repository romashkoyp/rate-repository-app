import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {variables: ID});

  const deleteSingleReview = async () => {
    try {
      const response = await mutate();
      
      if (response.errors) {
        throw new Error(response.errors[0].message);
      }

      if (!response.data) {
        throw new Error('Unable to delete review');
      }
      
      const deleteReview = response.data.deleteReview;
      console.log('response:', deleteReview);

      return { deleteReview, result: response };
    } catch (e) {
      console.error(e); 
      throw e;
    }
  };

  return [deleteSingleReview, result];
}

export default useDeleteReview;