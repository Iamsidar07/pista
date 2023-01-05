import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import logo from "../assets/white-logo.png"
import LoginForm from '../components/loginScreen/LoginForm'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={{width:150,height:150}} resizeMode="contain"/>
      </View>
      <LoginForm navigation={navigation}/>
    </View>
  )
}

const styles=StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "black",
    },
    logoContainer:{
        alignItems:"center",
    }
})

export default LoginScreen