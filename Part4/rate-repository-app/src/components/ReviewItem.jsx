import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';
import useMe from '../hooks/useMe';

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

const ReviewItem = ({ review }) => {
  const { text, rating, createdAt, user } = review;
  // console.log(createdAt)
  const formattedDate = format(new Date(createdAt), 'dd.MM.yyyy');
  const { me } = useMe(true);

  // console.log('about me:', me?.reviews?.edges[0]?.node?.repository?.fullName)

  const getRepositoryFullName = () => {
    if (user?.username) {
      return user.username;
    } else {
      const reviewFromMe = me?.reviews?.edges?.find(edge => edge.node.id === review.id);
      return reviewFromMe?.node?.repository?.fullName || `There is no repository name`;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text fontWeight="bold" color="primary">
          {rating}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text fontWeight='bold' fontSize='subheading'>{getRepositoryFullName()}</Text>
        <Text fontSize='subheading' color="secondary">{formattedDate}</Text>
        <View style={styles.textContainer}>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;