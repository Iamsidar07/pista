import { View,  StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import StyledText from '../../StyledText'
import { Formik } from 'formik'
import * as Yup from "yup"
import Validator from "email-validator"
import { signInWithEmailAndPassword } from "firebase/auth"
import {auth } from "../../firebase";


const LoginForm = ({ navigation }) => {
    const loginSchema = Yup.object({
        email: Yup.string().email().required("An email is required"),
        password: Yup.string().required().min(6, "Minimum 6 character is required"),
    })
    
    const onLogin=async (email,password) => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            //Signed in user
            const user=userCredential.user;
            console.log(user);
            Alert.alert("Login successful🎉");
        }).catch((error) =>{
            const errorCode=error.code;
            const errorMessage=error.message;
            Alert.alert(errorMessage);
        })
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Formik initialValues={
                {
                    email:"",
                    password:""
                }
            } validateOnMount={true} validationSchema={loginSchema} onSubmit={(values)=>onLogin(values.email,values.password)}>
                {
                    ({ handleSubmit, handleBlur, handleChange, values, isValid, error }) => {
                        
                    return    (
                        <>
                            <View style={[styles.inputContainer,{
                                borderColor:values.email?.length <1 || Validator.validate(values.email)
                                ? "gray"
                                :"red"
                            }]}>
                                <TextInput
                                    placeholderTextColor={"gray"}
                                    placeholder='username or email address'
                                    autoCapitalize={false}
                                    keyboardType='email-address'
                                    textContentType='email-address'
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    value={values.email}
                                    style={styles.input}
                                />
                            </View>
                            <View style={[styles.inputContainer,{
                                borderColor:values.password?.length<1 || values.password?.length>=6
                                ? "gray"
                                :"red"
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
                            <TouchableOpacity style={{
                                alignItems:"flex-end",
                                marginRight:19,
                                marginTop:5,
                            }}>

                            <StyledText text={"Forgot password ?"} style={{color:"orange"}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn,{
                                borderColor:isValid?"blue":"gray"
                            }]} onPress={handleSubmit} disabled={!isValid}>
                                <StyledText text={"Log in"} style={styles.btnText} />
                            </TouchableOpacity>
                        </>
                    )
                }}

            </Formik>
            <View style={{ alignItems: "center",justifyContent:"center", flexDirection: "row", marginTop: 50 }}>
                <StyledText text={"Don't have account ?"} style={{ marginRight: 5,color:"white" }} />
                <TouchableOpacity onPress={() => navigation.push("CreateAccountScreen")}>
                    <StyledText text={"create account"} style={{ color: "#696877" }} />
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
        borderWidth:1,
        marginHorizontal:15,
        borderRadius:7,
    },
    input: {
        fontFamily: "JosefinSans-Regular"
    },
    btn: {
        paddingVertical: 12,
        marginTop: 30,
        borderRadius: 4,
        marginHorizontal:15,
        borderWidth:0.7,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize:18,
    },
})
export default LoginForm