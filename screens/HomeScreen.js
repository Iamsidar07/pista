import { StyleSheet, ScrollView,  View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import Divider from '../components/home/Divider';
import  Data  from '../data/posts';
import { stories } from '../data/stories';
import BottomTab from '../components/BottomTab';
import { collectionGroup, getDocs, onSnapshot,doc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const HomeScreen = ({navigation}) => {
  const [posts,setPosts]=useState([]);
  useEffect(() => {
    const getPosts=async()=>{
      const q = collectionGroup(db, "posts");
       onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setPosts((previousPost)=>[...previousPost,{id:doc.id,postedTime:"2s ago",...doc.data()}])
        });
      });
    }
    getPosts();
  }, [])
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories stories={stories}/>
        <Divider />
        <View style={styles.postContainer}>
          {
            posts?.map((post) => {
              return <Post post={post} key={post.id} />
            })
          }
        </View>
      </ScrollView>
      <BottomTab navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  postContainer:{
    marginBottom:70,
  }
});

export default HomeScreen;
