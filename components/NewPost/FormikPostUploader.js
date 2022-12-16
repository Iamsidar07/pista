import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Divider from "../home/Divider"
import { AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from "yup"


const FormikPostUploader = () => {
    const validateSchema = Yup.object().shape({
        caption: Yup.string().max(2500, "Max limit character reached."),
        imageUrl: Yup.string().required().url("Invalid url"),
    });

    const [thumbnail, setThumbnail] = useState("https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png");

    return (
        <Formik initialValues={{
            imageUrl: "",
            caption: ""
        }} onSubmit={(value) => console.log(value)} validationSchema={validateSchema} validateOnMount={true}>

            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                <View style={styles.container}>
                    <View style={styles.imageAndCaptionContainer}>
                        <Image source={{ uri: thumbnail ? thumbnail : values.imageUrl }} resizeMode="cover" style={styles.placeholderImage} />
                        <TextInput
                            style={styles.caption}
                            multiline
                            onChange={handleChange('caption')}
                            onBlur={handleBlur("caption")}
                            value={values.caption}
                            placeholderTextColor="gray"
                            placeholder="Your lovely caption🥰..."
                            cursorColor={"green"}
                        />
                    </View>
                    {errors.caption && <Text style={styles.error}>{errors.caption}</Text>}
                    <Divider />
                    <TextInput
                        style={styles.url}
                        onChange={e => setThumbnail(e.nativeEvent.text)}
                        onBlur={handleBlur("imageUrl")}
                        value={values.imageUrl}
                        onChangeText={handleChange("imageUrl")}
                        placeholderTextColor="gray"
                        placeholder="paste image url..."
                        cursorColor={"white"}
                    />
                    {errors.imageUrl && <Text style={styles.error}>⚠️ {errors.imageUrl}</Text>}
                    <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                        <View style={styles.uploadButtonContainer}>
                            <AntDesign name="clouduploado" size={35} color="green" />
                            <Text style={styles.uploadButton}>Upload </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            )}

        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 25,
    },
    imageAndCaptionContainer: {
        flexDirection: "row",
        justifyContent: "flex-start"

    },
    placeholderImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    caption: {
        paddingHorizontal: 5,
        paddingTop: 10,
        color: "white",
        borderRadius: 2,
        flex: 1,
        marginLeft: 7,
    },
    url: {
        color: "white",
        fontSize: 14,
        marginTop: 7,
        backgroundColor: "#3B3C3B",
        padding: 10,
        borderRadius: 7,
    },
    uploadButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#3B3C3B",
        justifyContent: "center",
        marginTop: 50,
        paddingVertical: 10,
        borderRadius: 30,
    },
    uploadButton: {
        color: "white",
        marginLeft: 5,
    },
    error: {
        color: "red",
        fontSize: 12,
        marginVertical: 4,
    }
})

export default FormikPostUploader