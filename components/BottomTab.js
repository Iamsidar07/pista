import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons'
import logo from "../assets/user.jpg"
import Divider from "./home/Divider"
const BottomTab = ({navigation}) => {
    const [activeTab, setActiveTab] = useState("share-apple");
    const icons = ["share-apple", "search", "play", "heart"]
    const Icon = ({ icon }) => {
        return <TouchableOpacity onPress={() => setActiveTab(icon)}>
            <EvilIcons name={icon} size={activeTab === icon ? 38 : 30} color={activeTab === icon ? "#219A5F" : "white"} />
        </TouchableOpacity>
    }
    return (
        <>
            <View style={styles.container}>
                {
                    icons.map((icon, index) => <Icon icon={icon} key={index} />)
                }
                <TouchableOpacity style={styles.logoContainer} onPress={()=>navigation.push("LoginScreen")}>
                    <Image style={styles.logo} source={logo} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <Divider />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "black",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 50,
        zIndex: 50,
    },
    logoContainer: {
        width: 30,
        height: 30,
        borderRadius: 20,
    },
    logo: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
})

export default BottomTab;