import { View, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import StyledText from '../../StyledText'
import { Formik } from 'formik'
import * as Yup from "yup"
import Validator from "email-validator"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from '../../firebase'
import { collection,setDoc,doc } from 'firebase/firestore'
import { async } from '@firebase/util'

// import firebase from '../../firebase'


const SignupForm = ({ navigation }) => {
    
    const loginSchema = Yup.object({
        email: Yup.string().email().required("An email is required"),
        username: Yup.string().required("An username is required"),
        password: Yup.string().required().min(6, "Minimum 6 character is required"),
    })
    const getRandomUserAvatar = async () => {
        const res = await fetch('https://randomuser.me/api');
        const data =await res.json();
        const avatar = data.results[0].picture.large;
        return avatar;
    }
    const onSignup =async (email,password,username) => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.email,user.uid);
                await addUserIntoDb(user.uid,username,user.email);
                Alert.alert(`created user successfully🎉🎉`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(`error: ${errorCode} ${errorMessage}`);
                Alert.alert(errorMessage);
            });
    }

    const addUserIntoDb=async(owner_uid,username,email)=>{
        try {
            await setDoc(doc(db, "users", email), {
                owner_uid: owner_uid,
                username: username,
                email: email,
                profile_picture: await getRandomUserAvatar()
            });
            
            console.log("user added successfully🎉 ");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
    return (
        
        <KeyboardAvoidingView style={styles.container}>
            <Formik initialValues={
                {
                    email: "",
                    username:"",
                    password: ""
                }
            } validateOnMount={true} validationSchema={loginSchema} onSubmit={(values) => onSignup(values.email,values.password,values.username)}>
                {
                    ({ handleSubmit, handleBlur, handleChange, values, isValid, error }) => {

                        return (
                            <>
                                <View style={[styles.inputContainer, {
                                    borderColor: values.email?.length < 1 || Validator.validate(values.email)
                                        ? "gray"
                                        : "red"
                                }]}>
                                    <TextInput
                                        placeholderTextColor={"gray"}
                                        placeholder='email address'
                                        autoCapitalize={false}
                                        keyboardType='email-address'
                                        textContentType='email-address'
                                        onChangeText={handleChange("email")}
                                        onBlur={handleBlur("email")}
                                        value={values.email}
                                        style={styles.input}
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        placeholderTextColor={"gray"}
                                        placeholder='username'
                                        autoCapitalize={false}
                                        onChangeText={handleChange("username")}
                                        onBlur={handleBlur("username")}
                                        value={values.username}
                                        style={styles.input}
                                    />
                                </View>
                                <View style={[styles.inputContainer, {
                                    borderColor: values.password?.length < 1 || values.password?.length >= 6
                                        ? "gray"
                                        : "red"
                                }]}>
                                    <TextInput
                                        placeholderTextColor={"gray"}
                                        placeholder='password'
                                        autoCapitalize={false}
                                        secureTextEntry={true}
                                        onChangeText={handleChange("password")}
                                        onBlur={handleBlur("password")}
                                        value={values.password}
                                        style={styles.input}
                                    />
                                </View>
                                
                                <TouchableOpacity style={[styles.btn, {
                                    borderColor: isValid ? "blue" : "gray"
                                }]} onPress={handleSubmit} disabled={!isValid}>
                                    <StyledText text={"Sign up"} style={styles.btnText} />
                                </TouchableOpacity>
                            </>
                        )
                    }}

            </Formik>
            <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 50 }}>
                <StyledText text={"Do you have account ?"} style={{ marginRight: 5, color: "white" }} />
                <TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
                    <StyledText text={"log in"} style={{ color: "#696877" }} />
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    inputContainer: {
        padding: 10,
        backgroundColor: "white",
        marginBottom: 5,
        borderWidth: 1,
        marginHorizontal: 15,
        borderRadius: 7,
    },
    input: {
        fontFamily: "JosefinSans-Regular"
    },
    btn: {
        paddingVertical: 12,
        marginTop: 30,
        borderRadius: 4,
        marginHorizontal: 15,
        borderWidth:0.7,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
})
export default SignupForm