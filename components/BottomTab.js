import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons'
import logo from "../assets/user.jpg"
import Divider from "./home/Divider"
import { useQuery } from 'react-query'
const BottomTab = ({navigation}) => {
    const [activeTab, setActiveTab] = useState("share-apple");
    const icons = ["share-apple", "search", "play", "heart"]
    const shopId = "60f071e90622740004f4f4b6";

    //error coming
    const { isLoading, error, data,refetch } = useQuery("shopPhoto", () =>fetch(`https://rogan-app-server.onrender.com/api/shop/all`).then((res)=>res.json())
        
    , {
        enabled: false,
    })
    console.log(data)
    // const getShopPhoto = (shopId) => {
    //     // https://rogan-app-server.onrender.com/api/shop/photo/${shopId}
        
    //     console.log(data);
    // }
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
                <TouchableOpacity style={styles.logoContainer} onPress={refetch}>
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