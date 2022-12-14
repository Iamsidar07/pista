import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Stories = ({ stories }) => {

  return (
    <View
      style={{
        marginBottom: 15,
      }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}>

        {
          stories.map(story => {
            return <TouchableOpacity style={styles.container} key={story.id}>
              <View style={styles.logoContainer}>
                <Image
                  source={{
                    uri: story.image
                  }}
                  style={styles.logo}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.name}>{
                story.username.length > 8 ? story.username.slice(0, 8).toLowerCase() + "..." : story.username.toLowerCase()
              }</Text>
            </TouchableOpacity>
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  container: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    padding: 2,
    borderColor: '#E83F96',
    borderStyle: "dashed",
    borderWidth: 2,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  name: {
    fontSize: 12,
    fontWeight: "200",
    marginTop: 5,
    color: "white"
  },
});

export default Stories;
