import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,Dimensions } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import logo from "../assets/white-logo.png"
import illustration from "../assets/illustration.png"
import illu_01 from "../assets/illu_01.png"
import illu_02 from "../assets/illu_02.png"
import illu_03 from "../assets/illu_03.png"
import StyledText from '../StyledText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const GetStartedScreen = () => {
  return (
    <View style={styles.container}>
              <Image style={styles.logo} source={logo} resizeMode="contain" />
              <ScrollView horizontal contentContainerStyle={{
                marginTop:20,
              }}>
              <View style={styles.illustrationContainer}>
                  <StyledText text={"Lorem ipsum dolor sit."} style={styles.title} />
                  <StyledText text={"Lorem ipsum, dolor sit amet consectetur adipisicing."} style={styles.subtitle} />
                  <Image style={styles.illustration} source={illu_01} resizeMode="contain" />
              </View>
              <View style={styles.illustrationContainer}>
                  <StyledText text={"Lorem ipsum dolor sit."} style={styles.title} />
                  <StyledText text={"Lorem ipsum, dolor sit amet consectetur adipisicing."} style={styles.subtitle} />
                  <Image style={styles.illustration} source={illu_02} resizeMode="contain" />
              </View>
              <View style={styles.illustrationContainer}>
                  <StyledText text={"Lorem ipsum dolor sit."} style={styles.title} />
                  <StyledText text={"Lorem ipsum, dolor sit amet consectetur adipisicing."} style={styles.subtitle} />
                  <Image style={styles.illustration} source={illu_03} resizeMode="contain" />
              </View>
              
              </ScrollView>
          <TouchableOpacity style={styles.btn}>
              <StyledText text={"Get started"} style={styles.btnText} />
</TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        alignItems: 'center',
        backgroundColor:"black",
    }, 
    logo: {
        width: 200,
        height: 50,
    },
    illustrationContainer:{
        width: windowWidth,
        height: windowHeight / 2,
        alignItems:"center",
        marginTop:20,
    },
    illustration: {
        width: windowWidth-10,
        height: windowHeight/2,
        resizeMode: "contain",
        borderRadius:1,

    },
    title:{
       color:"#E8E7EE",
       fontSize:30,
    },
    subtitle:{
        color: "#979797",
        fontSize: 18,
        textAlign:"center",
        marginTop:7,
    },
    btn: {
        borderColor: "#FF008E",
        borderWidth:0.8,
        paddingVertical: 15,
        width: '80%',
        borderRadius: 40,
        marginBottom:"15%"
    },
    btnText: {
        color: '#FF008E',
        textAlign: 'center',
        fontWeight:"600",
    },
});

export default GetStartedScreen