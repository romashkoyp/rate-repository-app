import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/queries';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    const result = await mutate({ variables: { credentials } });
    // console.log('Mutation result:', result);
  
    if (result.errors) {
      throw new Error(result.errors[0].message);
    }
  
    const authenticate = result.data?.authenticate;
    if (!authenticate) {
      throw new Error('Authentication failed');
    }
  
    return authenticate;
  };

  return [signIn, result];
};

export default useSignIn;