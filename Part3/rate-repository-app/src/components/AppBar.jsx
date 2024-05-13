import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { AppBarTab, AppBarSignIn, AppBarSignOut } from './AppBarTab';
import useSignOut from '../hooks/useSignOut';

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
  const { userData, loading, error, signOut } = useSignOut();
  
  const handleSignOut = async () => { await signOut(); };
  console.log(userData)

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