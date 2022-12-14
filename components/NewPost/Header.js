import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Ionicons name="chevron-back" size={27} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>New post</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight+5,
        flexDirection:"row",
        paddingHorizontal:15,
    },
    text:{
        color:"white",
        flex:1,
        textAlign:"center",
    }
}
    )
export default Header