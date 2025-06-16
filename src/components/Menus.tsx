import { Image, StyleSheet, View } from "react-native";

export default function Menus() {
  return (
    <>
      <View>
        <View style={styles.menuItems}>
          <View style={styles.menuButton_active}>
            <Image
              source={require("../icons/home.png")}
              style={styles.menuButton}
            />
          </View>


          <View style={styles.menuButtonItem}>
            <Image
              source={require("../icons/watching.png")}
              style={styles.menuButton}
            />
          </View>

          <View style={styles.menuButtonItem}>
            <Image
              source={require("../icons/people.png")}
              style={styles.menuButton}
            />
          </View>

          <View style={styles.menuButtonItem}>
            <Image
              source={require("../icons/store.png")}
              style={styles.menuButton}
            />
          </View>

          <View style={styles.menuButtonItem}>
            <Image
              source={require("../icons/bell.png")}
              style={styles.menuButton}
            />
          </View>

          <View style={styles.menuButtonItem}>
            <Image
              source={require("../icons/user.png")}
              style={styles.menuButton}
            />
          </View>


        </View>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  menuItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  menuButton: {
    marginLeft: 10,
    marginRight: 10,
    width: 22,
    height: 22
  },
  menuButtonItem: {
    paddingBottom: 8,
  },
  menuButton_active: {
    borderBottomWidth: 2,
    paddingBottom: 8,
    borderBottomColor: '#000',
  }
});