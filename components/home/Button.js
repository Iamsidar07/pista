import {   Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import StyledText from '../../StyledText'

const Button = ({title,...otherProps}) => {
  return (
    <Pressable {...otherProps} >
      <TouchableOpacity style={styles.container}>
              <StyledText style={styles.title} text={`${title}`}/>
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