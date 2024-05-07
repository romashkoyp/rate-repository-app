import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { AppBarTab, AppBarSignIn } from './AppBarTab';

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
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.appBarTabContainer}>
          <AppBarTab />
        </View>
        <View style={styles.appBarTabContainer}>
          <AppBarSignIn />
        </View>
      </View>
    </View>
  ); 
};

export default AppBar;