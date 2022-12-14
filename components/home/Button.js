import {  Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({title,...otherProps}) => {
  return (
    <Pressable {...otherProps} >
      <TouchableOpacity style={styles.container}>
              <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingHorizontal:20,
        paddingVertical:7,
        borderRadius:15,
    },
    title:{
        textAlign:"center",
        fontWeight:"400",
        fontSize:12,

    }
})