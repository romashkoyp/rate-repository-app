import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { Formik, Form, Field } from 'formik';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    padding: 10,
  },
  textContainer: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonContainer: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit, values, handleChange }) => (
        <View>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <TextInput
                value={values.username}
                onChangeText={handleChange('username')}
                placeholder="Username"
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <View style={styles.buttonContainer}>
              <Pressable onPress={handleSubmit}>
                <Text color="bar">Sign in</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;