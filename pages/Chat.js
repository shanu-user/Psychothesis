import { TouchableHighlight, View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import VideoChat from './VideoChat'
import TextChat from './TextChat'


export default function Chat() {
  
    const [toggle, setToggle] = useState(true)    
    return (    
            <View style={styles.container}>
                {/* <Text>State: {connected ? 'Connected': 'Disconnected'}</Text>
                <Text>Current transport: {currentTransport}</Text>
                <Text>Last Message: {lastMessage}</Text> */}
                <View style={styles.options}>
                {toggle ? 
                    <TouchableHighlight onPress={() => setToggle(!toggle)} style={styles.text}>
                        <View>
                            <Text>Text</Text>
                        </View>
                    </TouchableHighlight>
                    
                    :
                
                    <TouchableHighlight onPress={() => setToggle(!toggle)} style={styles.video}>
                        <View>
                            <Text>Video</Text>
                        </View>
                    </TouchableHighlight>
                }
                </View>
                {toggle ? 
                    <TextChat />
                    :
                    <VideoChat />
                }
            </View>
        )
    }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    options: {
        position: 'absolute',
        top: 20,
        display: 'flex',
        flexDirection: 'row',
        width: '40%', 
        height: '5%',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 155, 0.5)',
        borderWidth: 2,
        borderRadius: 25,
    },
    text: {
        borderWidth: 2, 
        justifyContent: 'center',
        width: '40%',
        height: '100%',
        borderRadius: 25,
        position: 'absolute',
        left: 10,
        display: 'flex',
        alignItems: 'center'
    },
    video: {
        borderWidth: 2,
        width: '40%',
        justifyContent: 'center',
        height: '100%',
        borderRadius: 25,
        position: 'absolute',
        right: 10,
        display: 'flex',
        alignItems: 'center'
    }
})

