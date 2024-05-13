import useAuthStorage from './useAuthStorage';
import { ME } from '../graphql/queries';
import { useApolloClient } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-native';

const useSignOut = () => {
  const { data, loading, error } = useQuery(ME);
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await client.resetStore();
    navigate('/signIn');
  };

  return { userData: data?.me, loading, error, signOut };
};

export default useSignOut;