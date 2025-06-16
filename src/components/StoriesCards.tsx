import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function StoriesCards() {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 10 }).map((_, index) => (
          <View key={index} style={styles.card}>
            {/* <Text>Story {index + 1}</Text> */}
            <Image 
              style={styles.storyAvatar} 
              source={{ uri: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp' }}
            />
            <Text style={styles.userName}>Saroar</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 150,
    paddingVertical: 10,
  },
  card: {
    width: 90,
    height: 130,
    marginRight: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  storyAvatar: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginBottom: 5,
    position: 'absolute',
    top: 8,
    left: 8,
  },
  userName: {
    fontSize: 12,
    color: '#333',
    position: 'absolute',
    bottom: 8,
    left: 8,
  }
});
