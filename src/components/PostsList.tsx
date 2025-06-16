import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

export default function PostsList() {

  const renderPostCard = (postData: object, index: number) => {
    return (
      <View key={index} style={styles.postCard}>
        <View style={styles.postHeader}>
          <View style={styles.postOwner}>
            <Image 
              source={{ uri: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp' }}
              style={{ width: 35, height: 35, borderRadius: 50 }}
            />

            <View>
              <Text style={{fontWeight: 700, fontSize: 13}}>Ahnaf Sarowar</Text>
              <Text style={{fontWeight: 400, fontSize: 10}}>1 hour ago</Text>
            </View>
          </View>
          <View style={styles.postActionButtons}>
            <Image 
              source={require('../icons/option.png')}
              style={{ width: 18, height: 18 }}
            />
            <Image 
              source={require('../icons/close.png')}
              style={{ width: 12, height: 12 }}
            />
          </View>
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={styles.postText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe eaque eligendi, quos laboriosam sequi asperiores quibusdam quas. Est amet sed quasi! Error quo quasi ab aliquam autem distinctio ad facilis!
          </Text>
        </View>

        <View style={styles.postActionElements}>
          <View style={styles.buttonWrapper}>
            <Image
              source={require('../icons/like.png')}
              style={styles.likeButtons}
            />
            <Text>12</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Image
              source={require('../icons/comment.png')}
              style={styles.likeButtons}
            />
            <Text>5</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Image
              source={require('../icons/share.png')}
              style={styles.likeButtons}
            />
            <Text>Share</Text>
          </View>
        </View>
      </View>
    )
  };

  return (
    <>
      <View>
        {Array.from({ length: 10 }).map((_, index) => (
          renderPostCard(_, index)
        ))}
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  postCard: {
    maxHeight: 500,
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postOwner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  postActionButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  postText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 10,
  },
  postActionElements: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 10,
    width: '100%',
  },
  likeButtons: {
    width: 18, 
    height: 18
  },
  buttonWrapper: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    gap: 10,
    width: '33%',
    marginVertical: 'auto',
  }
});