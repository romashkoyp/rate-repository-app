import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: 'blue',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
  },
  textContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 5,
  },
});

const ReviewItem = ({ review, repositoryFullName, repositoryId }) => {
  const { text, rating, createdAt, user } = review;
   // console.log(user);

  const fullName = repositoryFullName;
  // console.log(fullName);

  const id = repositoryId;
  // console.log(id);

  const formattedDate = format(new Date(createdAt), 'dd.MM.yyyy');
  const displayName = fullName || user?.username || 'No Name Available';

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text fontWeight="bold" color="primary">
          {rating}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text fontWeight='bold' fontSize='subheading'>{displayName}</Text>
        <Text fontSize='subheading' color="secondary">{formattedDate}</Text>
        <View style={styles.textContainer}>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;