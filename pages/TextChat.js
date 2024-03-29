import { TouchableHighlight, TextInput, Button, View, StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import socketServices from '../socket/socket'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


export default function TextChat() {
    const navigation = useNavigation()
    const contacts = [
        {
            key: 1,
            name: 'Sindhu',
            message: 'Hello'
        }, {
            key: 2,
            name: 'Dhanraj',
            message: 'Hello'
        }, {
            key: 3,
            name: 'Samiksha',
            message: 'Hello'
        }, {
            key: 4,
            name: 'Akanksha',
            message: 'Hello'
        }
    ]
    useEffect(() => {
        socketServices.initializeSocket()
    }, [])
    const goToChat = (props) => {
        navigation.navigate("ChatScreen", {name: props})
    }
    return (
        <View style={styles.container}>
        <View style={styles.heading}>
            <View style={styles.logo}></View>
            <View style={styles.notification}></View>
        </View>
            {
                contacts.map((contact, index) => (
                    <View style={styles.contact} key={index}>
                        <View style={styles.logo}></View>
                        <View style={styles.contact_details}>
                            <TouchableHighlight onPress={() => goToChat(contact.name)}>
                                <Text style={styles.name}>{contact.name}</Text>
                            </TouchableHighlight>
                            <Text style={styles.message}>{contact.message}</Text>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#768a1e",
        width: "100%",
        height: "80%"
    },
    heading: {
        display: 'flex',
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        borderWidth: 2,
    },
    
    contact_details: {
        display: 'flex',
        flexDirection: 'column',
        left: 14,
    },  
    contact: {
        borderWidth: 2,
        backgroundColor: '#99a3a3',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        marginTop: 10,
        height: "15%"
    },
    logo: {
        backgroundColor: "#1f9599",
        width: 45,
        height: 45,
        borderWidth: 2,
        borderRadius: 40,
        top: 4,
        left: 10,
    },
    notification: {
        backgroundColor: "#1f9599",
        width: 45,
        height: 45,
        borderWidth: 2,
        borderRadius: 40,
        top: 4,
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 28,

    }
})