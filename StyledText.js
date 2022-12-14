import { Text, StyleSheet } from 'react-native'
import React from 'react'

const StyledText = ({text,style,...otherProps}) => {
  return (
      <Text style={[styles.text,style]} {...otherProps}>{text}</Text>
  )
}

const styles=StyleSheet.create({
  text:{
    fontFamily:"JosefinSans-Regular",
    fontSize:16,
  }
})

export default StyledText