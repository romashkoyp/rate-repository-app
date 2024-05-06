import { Pressable, Text } from 'react-native';
import theme from '../theme';

const AppBarTab = () => {
  return (
    <Pressable>
      <Text style={{ color: theme.colors.barText, fontSize: theme.fontSizes.subheading }}>Repositories</Text>
    </Pressable>
  )
};

export default AppBarTab;