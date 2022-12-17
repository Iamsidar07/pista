import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

import heart from '../../assets/heart1.png';
import Comment from './Comment';
import StyledText from '../../StyledText';
const PostFooter = ({username,caption,likes,comments,postedTime}) => {
  const [liked, setLiked] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 8,
    },
    upIconsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 10,
    },
    iconsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:"space-evenly"
    },
    icon:{
      marginHorizontal:5,
    }
,
    redHeart: {
      width: 25,
      height: 25,
    },
    likes: {
      fontWeight: '600',
      color:"white"
    },
    caption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 2,
    },
    user: {
      fontSize: 18,
      fontWeight: '500',
      color:"white"
    },
    captionText: {
      fontSize: 18,
      fontWeight: '400',
      color:"white",
      marginLeft:4,
    },
    commentText: {
      fontWeight: '300',
      color: 'gray',
      marginTop:4,
    },
    postedTime: {
      fontSize: 12,
      marginBottom: 5,
      color:"gray",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.upIconsContainer}>
        <View style={styles.iconsContainer}>
          <View >
            {liked ? (
              <Pressable style={styles.icon} onPress={() => setLiked(false)}>
                <Image
                  source={heart}
                  resizeMode="contain"
                  style={styles.redHeart}
                />
              </Pressable>
            ) : (
              <TouchableOpacity style={styles.icon} onPress={() => setLiked(true)}>
                <EvilIcons name="heart" size={30} color="white" />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.icon}>
            <EvilIcons name="comment" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <EvilIcons name="share-apple" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="ios-bookmark-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <StyledText style={styles.likes} text={`${likes} likes`}/>
      <View style={styles.caption}>

        <StyledText style={styles.user} text={`${username}`} />
        <StyledText style={styles.captionText} text={`${caption}`} />

      </View>

      <TouchableOpacity onPress={() => setShowComment(!showComment)}>
        
        <StyledText style={styles.commentText} text={`View all ${comments.length} comments`} />
      </TouchableOpacity>
      <StyledText style={styles.postedTime} text={`${postedTime}`} />
      {showComment && (
        
          comments.map(({comment,username,profilePicture,id})=>{
           return <Comment comment={comment} username={username} profilePicture={profilePicture} key={id}/>
          })
        
      )}

      
    </View>
  );
};

export default PostFooter;
