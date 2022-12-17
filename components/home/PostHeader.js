import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import verifiedBadge from "../../assets/verified.png"
import Button from './Button';
import StyledText from '../../StyledText';

const PostHeader = ({ profilePicture, username, isVerified }) => {
  console.log(isVerified)
  return (
    <View style={styles.container}>
      <View style={styles.logoParentContainer}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{ uri: profilePicture }}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <StyledText style={styles.username} text={`${username }`}/>
        {isVerified && <Image
          source={verifiedBadge}
          style={styles.badgelogo}
          resizeMode="contain"
        />}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Button title={"Follow"} style={{ marginRight: 10 }} />
        <TouchableOpacity>
          <MaterialCommunityIcons name="dots-vertical" size={25} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginTop: 3,
    marginBottom: 10,
    height: 30,
  },
  logoParentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    padding: 1,
    borderColor: 'black',
    borderStyle: 'dotted',
    borderWidth: 1,
    marginLeft: 2,
    marginRight: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  badgelogo: {
    width: 20,
    height: 20,
  },
  username: {
    fontSize: 12,
    color: "white",
  },

});

export default PostHeader;
