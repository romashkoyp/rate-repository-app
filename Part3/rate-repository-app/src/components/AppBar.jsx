import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-native';
import Constants from 'expo-constants';
import { useQuery, useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { AppBarTab, AppBarSignIn, AppBarSignOut } from './AppBarTab';
import { ME } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: 'rgba(36, 41, 46, 0.7)',
  },
  bar: {
    flexDirection: 'row',
  },
  appBarTabContainer: {
    padding: 10,
  }
});

const AppBar = () => {
  const { data, loading, error } = useQuery(ME);
  console.log(data)
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await client.resetStore();
    navigate('/signIn');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.bar}>
          <View style={styles.appBarTabContainer}>
            <AppBarTab />
          </View>
          <View style={styles.appBarTabContainer}>
            <AppBarSignOut onPress={handleSignOut}/>
          </View>
          <View style={styles.appBarTabContainer}>
            <AppBarSignIn />
          </View>
        </View>
      </ScrollView>
    </View>
  ); 
};

export default AppBar;