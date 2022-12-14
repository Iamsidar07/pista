import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';

const Comment = ({ username, comment,profilePicture }) => {
  return (
    <View style={styles.caption}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: profilePicture }}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.user}>{username}</Text>
      <Text style={styles.captionText}> {comment} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 5,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  caption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    paddingHorizontal: 9,
    paddingVertical: 10,
    backgroundColor: '#219A5F',
    borderBottomLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: 'white',
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  user: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
  },
});

export default Comment;
