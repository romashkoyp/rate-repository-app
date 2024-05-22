import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { Menu, Button, PaperProvider, Searchbar } from 'react-native-paper';
import Item from './RepositoryItem';
import Overlay from './Overlay';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#e1e4e8',
    paddingBottom: 10,
  },
  searchContainer: {
    alignItems: 'left',
    backgroundColor: '#e1e4e8',
    padding: 10,
  },
  menuButton: {
    backgroundColor: '#e1e4e8',
    borderRadius: 5,
  },
  menuContainer: {
    position: 'absolute',
    top: '35%',
    left: '10%',
    width: '80%',
    backgroundColor: 'white',
    elevation: 5,
    zIndex: 2,
    borderRadius: 5,
  },
  menuItem: {
    padding: 10,
  },
  flatListContainer: {
    flex: 1,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [selectedOption, setSelectedOption] = useState('Tap to sort repositories');
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const { repositories } = useRepositories(orderBy, orderDirection);
  const navigate = useNavigate();
  // console.log(repositories)

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  const handlePress = (id) => {
    navigate(`/repository/${id}`);
  };

  const openMenu = () => setVisible(!visible);

  const handleOrderChange = (value) => {
    switch (value) {
      case 'CREATED_AT_DESC':
        setOrderBy('CREATED_AT');
        setOrderDirection('DESC');
        setSelectedOption('Latest repositories');
        break;
      case 'RATING_AVERAGE_DESC':
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('DESC');
        setSelectedOption('Highest rated repositories');
        break;
      case 'RATING_AVERAGE_ASC':
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('ASC');
        setSelectedOption('Lowest rated repositories');
        break;
      default:
        break;
    }
    setVisible(false);
  };

  const renderHeader = () => (
    <PaperProvider>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          placeholderTextColor={theme.colors.secondary}
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{ backgroundColor: 'white', borderRadius: 5, height: 60
           }}
        />
      </View>
      <View style={styles.headerContainer}>
        <Button onPress={openMenu} style={styles.menuButton}>
          {selectedOption}
        </Button>
      </View>
    </PaperProvider>
  );

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={renderHeader}
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

      <View style={styles.menuContainer}>
        {visible && ( 
          <View>
            <Menu.Item
              title="Select an item..."
              style={styles.menuItem}
              titleStyle={{ color: theme.colors.secondary }}
            />
            <Menu.Item
              onPress={() => handleOrderChange('CREATED_AT_DESC')}
              title="Latest repositories"
              style={styles.menuItem}
            />
            <Menu.Item
              onPress={() => handleOrderChange('RATING_AVERAGE_DESC')}
              title="Highest rated repositories"
              style={styles.menuItem}
            />
            <Menu.Item
              onPress={() => handleOrderChange('RATING_AVERAGE_ASC')}
              title="Lowest rated repositories"
              style={styles.menuItem}
            />
          </View>
        )}
      </View>
      <Overlay visible={visible} />
    </View>
  );
};

export default RepositoryList;