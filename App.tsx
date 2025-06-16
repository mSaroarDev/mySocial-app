import { ScrollView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Heading from './src/components/Heading';
import Menus from './src/components/Menus';
import PostNow from './src/components/PostNow';
import StoriesCards from './src/components/StoriesCards';
import PostsList from './src/components/PostsList';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Heading />
        <Menus />
        <ScrollView showsVerticalScrollIndicator={false}>
          <PostNow />
          <StoriesCards />
          <PostsList />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleBar: {
    backgroundColor: '#f4511e',
    padding: 10,
  },
  textDark: {
    color: 'white',
    fontSize: 20,
  }
});

export default App;
