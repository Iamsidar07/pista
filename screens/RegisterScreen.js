import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import illustration from "../assets/illustration.png"
import StyledText from '../StyledText'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const RegisterScreen = ({navigation}) => {

    return (
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={illustration} style={styles.image} />
                    </View>
                    <View style={styles.content}>
                        <View>
                            <View style={styles.titleContainer}>
                        <StyledText style={styles.title} text={"Discover Your"} />
                        <StyledText style={styles.title} text={"Dream Job Here"} />
                            </View>
                            <View style={styles.subtitleContainer}><Text style={styles.subtitle}>Explore all the most existing job roles</Text>
                        <StyledText style={styles.subtitle} text={"based on your interest And study major "} />
                            </View>
                        </View>
                        <View style={styles.btnContainer}>
                            <View style={[styles.btn, styles.registerBtn]}>

                        <StyledText style={styles.btnText} text={"Register"} />
                            </View>
                            <TouchableOpacity style={[styles.btn, styles.loginBtn]} onPress={()=>navigation.push("LoginScreen")}>
                        <StyledText style={styles.btnText} text={"Login"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "black",
        justifyContent: "flex-end",
        paddingHorizontal: 10,
    },
    imageContainer: {
        flex: 1,
        // backgroundColor: "#da9bf9",
        borderRadius: 40,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    content: {

        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: 30,
    },
    titleContainer: {
        marginTop: 30,
        marginBottom: 20,
        maxWidth: "90%"
    },
    subtitleContainer: {
        // marginTop: 30,
        marginBottom: 50,
        maxWidth: "90%"

    },
    title: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
    },
    subtitle: {
        color: "#c1c5d3",
        fontSize: 15,
        textAlign: "center",

    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",

    },
    btn: {
        backgroundColor: "transparent",
        paddingHorizontal: 35,
        paddingVertical: 25,
        width: "47%",
    },
    btnText: {
        color: "black",
        textAlign: "center",
    },
    registerBtn: {
        backgroundColor:"#ffffff",
        borderRadius: 10,
        shadowOffset:{width:100,height:1},
        shadowColor:"white",
        zIndex: 2
    },
    loginBtn: {
        backgroundColor: "#eaebf1",
        marginLeft: -8,
        borderTopRightRadius: 10,
        borderBottomEndRadius: 10,
        zIndex:-1,
    },

})

export default RegisterScreen