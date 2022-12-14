import { View, TouchableOpacity, StyleSheet, Image, } from 'react-native'
import React from 'react'

const PostImage = ({ imageUrl }) => {

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 380,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },
});

export default PostImage