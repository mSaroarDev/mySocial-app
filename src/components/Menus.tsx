import { Image, StyleSheet, View } from "react-native";

export default function Menus() {
  return (
    <>
      <View>
        <View style={styles.menuItems}>
            <Image
              source={require("../icons/home.png")}
              style={styles.menuButton}
            />

            <Image
              source={require("../icons/watching.png")}
              style={styles.menuButton}
            />

            <Image
              source={require("../icons/people.png")}
              style={styles.menuButton}
            />

            <Image
              source={require("../icons/store.png")}
              style={styles.menuButton}
            />

            <Image
              source={require("../icons/bell.png")}
              style={styles.menuButton}
            />

            <Image
              source={require("../icons/user.png")}
              style={styles.menuButton}
            />
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
    paddingBottom: 10,
  },
  menuButton: {
    marginLeft: 10,
    marginRight: 10,
    width: 22, 
    height: 22
  }
});