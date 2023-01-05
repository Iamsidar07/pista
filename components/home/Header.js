import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';

import logo from "../../assets/white-logo.png"
import { EvilIcons , AntDesign} from '@expo/vector-icons';
import StyledText from '../../StyledText';
import {signOut} from "firebase/auth"
import {auth } from "../../firebase"
const Header = ({navigation}) => {
  //I will refactor these functions into async and await functions
  const handleSignOut=()=>{
     signOut(auth).then(()=>{
      console.log("Sign out");
     }).catch((error)=>console.error(error));
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoContainer} onPress={handleSignOut}>
        <Image style={styles.logo} source={logo} resizeMode="contain" />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={()=>navigation.push("NewPostScreen")}>
          <EvilIcons name="plus" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.badgeContainer}>
          <AntDesign name="message1" size={24} color="white" />
          <View style={styles.bagde}>
            <StyledText style={styles.messageNumber} text={"10"}/>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal:10,
  },
  logoContainer:{
     width:"40%",
     height:40,
  },
  logo: {
    width:"100%",
    height:"100%",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 0.5,
  },
  badgeContainer:{
  position:"relative",
  
  },
  bagde:{
    borderWidth:0.1,
    position:"absolute",
    left:14,
    bottom:10,
    backgroundColor:"#A79AFD",
    width:30,
    paddingVertical:5,
    borderRadius:20,
},
  messageNumber:{
    textAlign:"center",
    color:"white",
    fontSize:10,
    fontWeight:"600",
  }
}
)

export default Header;