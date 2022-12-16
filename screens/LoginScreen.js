import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Line from '../assets/line.png';
import google from '../assets/google.png';
import fb from '../assets/fb.png';
import apple from '../assets/apple.png';
const LoginScreen = ({ navigation }) => {
  const [active, setActive] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.subtitle}>Welcome back you've </Text>
        <Text style={styles.subtitle}>been missed!</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter username"
          // autoComplete={false}
          autoCorrect={false}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="password"
          // autoComplete={false}
          autoCapitalize={false}
          secureTextEntry={!active}
          autoCorrect={false}
        />
        <TouchableOpacity style={{marginRight:5}} onPress={() => setActive(!active)}>
          {active ? (
            <Feather name="eye" size={18} color="#fc6b68" />
          ) : (
            <Feather name="eye-off" size={18} color="#fc6b68" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.recoveryPasswordContainer}>
        <Text style={styles.recoveryPassword}>Recovery Password</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orContinueWithText}>Or continue with</Text>

      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={google} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={apple} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={fb} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>
        Not a member?{' '}
        <Text
          style={styles.bottomSubText}
          onPress={() => navigation.push('RegisterScreen')}>
          Register now
        </Text>{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  topContent: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  subtitle: {
    color: '#7c7885',
    fontSize: 27,
    textAlign: 'center',
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 7,
    paddingLeft:"7%",
    paddingVertical: 20,
    marginTop: 15,
    width: '90%',
    borderRadius: 10,
    fontSize: 15,
  },
  textInput: {
    width: '80%',
    marginRight: 5,
  },
  recoveryPasswordContainer: {
    alignItems: 'flex-end',
    width: '90%',
  },
  recoveryPassword: {
    color: '#9096a3',
    textAlign: 'right',
    marginTop: 7,
  },
  btn: {
    backgroundColor: '#fc6b68',
    paddingVertical: 20,
    width: '90%',
    marginTop: "15%",
    borderRadius: 5,
  },
  btnText: {
    color: '#fee2e2',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  // orContinueWith:{
  //   width:"100%",
  //   flexDirection:"row",
  //   alignItems:"center",
  //   justifyContent:"center",
  //   backgroundColor:"red",
  //   height:20,
  // },
  orContinueWithText: {
    color: '#696877',
    marginTop: 15,
  },
  // image:{
  //   width:"100%",
  //   height:10,
  //   resizeMode:"contain"
  // }

  icons: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  iconContainer: {
    width: 100,
    height: 70,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: { width: 1, height: 0.5 },
    shadowRadius: 1,
    shadowColor: 'white',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  bottomText: {
    marginTop: 30,
    color: '#a5a4af',
    fontSize: 14,
  },
  bottomSubText: {
    color: '#6fa3e7',
  },
});

export default LoginScreen;

// <View style={styles.orContinueWith}>
//       <Image source={Line} style={styles.image}/>

//       <Image source={Line} style={styles.image}/>
//       </View>
