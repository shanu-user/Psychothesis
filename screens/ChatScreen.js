import { StyleSheet, TextInput, ScrollView, TouchableHighlight, View, Text } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons'




export default function ChatScreen({route, navigation}) {
    
    const backScreen = () => {
        navigation.navigate("Chat")
    }

    const sendMessage = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableHighlight onPress={backScreen}>
                    <FontAwesomeIcon icon={faArrowLeft} style={styles.back_icon}/>
                </TouchableHighlight>
                <View style={styles.logo}></View>
                <Text style={styles.name}>{route.params.name}</Text>
            </View>
            <ScrollView>
                <View style={styles.chat}>
                    <View style={styles.sender}>
                        <View style={styles.sender_logo}></View>
                        <Text style={styles.sender_message}>{route.params.name}: Hello</Text>
                    </View>
                    <View style={styles.receiver}>
                        <Text style={styles.receiver_message}>You: Hello</Text>    
                        <View style={styles.receiver_logo}></View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.chat_controls}>
                <TextInput style={styles.chat_text} placeholder="Enter your message"></TextInput>
                <TouchableHighlight style={styles.chat_button} onPress={sendMessage()}>
                    <FontAwesomeIcon icon={faPaperPlane} size={20}/>
                </TouchableHighlight>    
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "pink",
        borderWidth: 2,
        borderColor: "red"
    },
    chat: {
        marginTop: 40,
        left: 14
    },
    chat_controls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 0,
        width: "100%",
        position: 'absolute',
    },
    chat_text: {
        width: 300,
        height: 50,
        borderWidth: 2,
        padding: 15,
        borderRadius: 44
    },
    chat_button: {
        borderWidth: 2,
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4287f5"
    },
    sender: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30
    },
    receiver: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30
    },
    sender_logo: {
        backgroundColor: '#f54275',
        width: 45,
        height: 45,
        borderWidth: 2,
        borderRadius: 40, 
    },
    receiver_logo: {
        backgroundColor: "#f57e42",
        width: 45,
        height: 45,
        borderWidth: 2,
        borderRadius: 40,
        right: -20,
        top: 14
    },
    sender_message: {
        top: 4,
        borderWidth: 2,
        borderRadius: 12,
        width: "70%",
        paddingLeft: 14,
        height: "120%",
        left: 14
    },
    receiver_message: {
        top: 9,
        borderWidth: 2,
        borderRadius: 12,
        width: "70%",
        height: "120%",
        left: 14,
        paddingLeft: 14
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
    },
    back_icon: {
        fontWeight: 'bold',
        fontSize: 28,
        left: 9,
        top: 16
    },
    logo: {
        backgroundColor: "#1f9599",
        width: 45,
        height: 45,
        borderWidth: 2,
        borderRadius: 40,
        top: 4,
        left: 13,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 28,
        left: 15,
        top: 4
    }
})