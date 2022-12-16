import { StyleSheet, ScrollView, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import Divider from '../components/home/Divider';
import { posts } from '../data/posts';
import { stories } from '../data/stories';
import BottomTab from '../components/BottomTab';

const HomeScreen = ({navigation}) => {
  console.log(navigation)
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories stories={stories}/>
        <Divider />
        <View style={styles.postContainer}>
          {
            posts.map((post) => {
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
