import { Image, StyleSheet, Text, View } from "react-native";
// import plusIcon from "../icons/Plus.svg";

export default function Heading() {
  return (
    <>
      <View>
        <View style={styles.titleBar}>
          <Text style={styles.brand}>Facebook</Text>

          <View style={styles.topButtons}>
            <Image
              source={require("../icons/plus.png")}
              style={{ width: 20, height: 20 }}
            />

            <Image
              source={require("../icons/search.png")}
              style={{ width: 25, height: 25 }}
            />

            <Image
              source={require("../icons/messenger.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </View>
      </View>
    </>
  )
};

const styles = StyleSheet.create({

  titleBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },

  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1877F2',
  },
  topButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  }
});