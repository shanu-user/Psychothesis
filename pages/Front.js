import { TouchableOpacity, StyleSheet, View, Text, ImageBackground } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native' 
import { SplashScreen } from 'expo-splash-screen'
import { useFonts } from 'expo-font'

export default function Front() {
    const navigation = useNavigation()

    const [fontsLoaded] = useFonts({
        'Kaushan_Script': require('../assets/fonts/KaushanScript-Regular.ttf')
    })
    
    const [appIsReady, setAppIsReady] = useState(false)

    useEffect(() => {
        async function prepare() {
            try{ 
                await SplashScreen.preventAutoHideAsync()

                await useFonts({
                    'Kaushan_Script': require('../assets/fonts/KaushanScript-Regular.ttf')
                })
            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
            }
        }

        prepare()
    }, [])

    useEffect(() => {
        if(fontsLoaded && appIsReady) {
            SplashScreen.hideAsync()
        }
    }, [appIsReady, fontsLoaded])
    
    return (
            <ImageBackground source={require('../assets/front_background.jpg')} style={styles.backgroundImage}>
                <Text style={styles.text}>Psychothesis</Text>
                <View style={styles.switch_ctrl}>
                    <TouchableOpacity onPress={() => navigation.navigate("User")} style={styles.btn}>
                        <Text style={styles.btn_text}>Sign in</Text>
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
        fontSize: 30,
        fontFamily: 'Kaushan_Script'
    },
    btn: {
        width: "40%",
        height: "40%",
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
        marginLeft: "20%",
        
    }
})