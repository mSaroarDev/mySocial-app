import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Heading from './src/components/Heading';
import Menus from './src/components/Menus';
import PostNow from './src/components/PostNow';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Heading />
        <Menus />
        <PostNow />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
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
