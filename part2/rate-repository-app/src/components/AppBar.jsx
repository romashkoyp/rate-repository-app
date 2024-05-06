import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: 'rgba(36, 41, 46, 0.7)'
  },
  bar: {
    flexGrow: 0
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
      </View>
    </View>
  ); 
};

export default AppBar;