import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import Item from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();
  // console.log(repositories)

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  const handlePress = (id) => {
    navigate(`/repository/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handlePress(item.id)}>
          <Item
            fullName={item.fullName}
            description={item.description}
            language={item.language}
            stargazersCount={item.stargazersCount}
            forksCount={item.forksCount}
            reviewCount={item.reviewCount}
            ratingAverage={item.ratingAverage}
            ownerAvatarUrl={item.ownerAvatarUrl}
          />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;