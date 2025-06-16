import { Image, StyleSheet, TextInput, View } from "react-native";

export default function PostNow() {
  return (
    <>
      <View style={styles.postContainer}>
        <Image 
          source={require("../icons/user.png")}
          style={styles.avatar}
        />

        <TextInput 
          style={styles.inputBox}
          placeholder="What's on your mind?"
        />

        <Image 
          source={require("../icons/image.png")}
          style={styles.imageUploadIcon}
        />

      </View>
    </>
  )
};

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  inputBox : {
    flex: 1,
    marginLeft: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
  imageUploadIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  }
});