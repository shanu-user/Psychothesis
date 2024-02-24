import { TouchableOpacity, StyleSheet, View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native' 


export default function Front() {

    const navigation = useNavigation()

    
    return (
            <ImageBackground source={require('../assets/bg_wallpaper.jpg')} style={styles.backgroundImage}>
                <Text style={styles.text}>Front</Text>
                <View style={styles.switch_ctrl}>
                    <TouchableOpacity onPress={() => navigation.navigate("User", {section: "Login"})} style={styles.btn}>
                        <Text style={styles.btn_text}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("User", {section: "Signup"})} style={styles.btn}>
                        <Text style={styles.btn_text}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backgroundImage: {
        height: "100%"
    },
    text: {
        color: "red"
    },
    btn: {
        width: "40%",
        height: "25%",
        marginLeft: "20%",
        marginBottom: "10%",
        bottom: 10,
        borderRadius: 19,
        position: "relative",
        backgroundColor: "#EAE570"
    },
    switch_ctrl: {
        position: "absolute",
        bottom: 0,
        right: 80,
    },
    btn_text: {
        color: "#0D5314",
        marginLeft: "25%",
        marginTop: "5%"
    }
})