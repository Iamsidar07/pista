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
      fontSize: 12,
      fontWeight: '500',
      color:"white"
    },
    captionText: {
      fontSize: 12,
      fontWeight: '400',
      color:"white"
    },
    commentText: {
      fontWeight: '300',
      color: 'gray',
      marginTop:4,
    },
    postedTime: {
      fontSize: 10,
      marginBottom: 5,
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
      <Text style={styles.likes}>{likes} likes</Text>
      <View style={styles.caption}>
        <Text style={styles.user}>{username}</Text>
        <Text style={styles.captionText}> {caption} </Text>
      </View>

      <TouchableOpacity onPress={() => setShowComment(!showComment)}>
        <Text style={styles.commentText}>View all {comments.length} comments</Text>
      </TouchableOpacity>
      <Text style={[styles.postedTime, styles.commentText]}>{postedTime}</Text>

      {showComment && (
        
          comments.map(({comment,username,profilePicture,id})=>{
           return <Comment comment={comment} username={username} profilePicture={profilePicture} key={id}/>
          })
        
      )}

      
    </View>
  );
};

export default PostFooter;
