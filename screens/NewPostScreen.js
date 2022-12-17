import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/NewPost/Header'
import FormikPostUploader from '../components/NewPost/FormikPostUploader'

const NewPostScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <FormikPostUploader/>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  }
})




export default NewPostScreen