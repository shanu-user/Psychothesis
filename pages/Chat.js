import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000')


export default function Chat() {

    const [connected, setConnected] = useState(socket.connected)
    const [currentTransport, setCurrentTransport] = useState(socket.connected ? socket.io.engine.transport.name : '-')
    const [lastMessage, setLastMessage] = useState('')
    
    const handleConnect = () => {
        setConnected(socket.connected)
        setCurrentTransport(socket.connected ? socket.io.engine.transport.name : '-')
        if(socket.connected){
            socket.io.engine.on('upgrade', onUpgrade)
        }
        else{
            socket.io.engine.off('upgrade')
        }
    }

    const handleDisconnect = () => {
        setConnected(socket.connected)
        setCurrentTransport('-')
        socket.io.engine.off('upgrade')
    }


    const handleMessage = (content) => {
        setLastMessage(content)
    }

    const onUpgrade = () => {
        setCurrentTransport(socket.io.engine.transport.name)
    }
    useEffect(() => {


        socket.on('connect', handleConnect)
        socket.on('disconnect', handleDisconnect)
        socket.on('message', handleMessage)
        
        return () => {
            socket.off('connect', handleConnect)
            socket.off('disconnect', handleDisconnect)
            socket.off('message', handleMessage)
            socket.io.engine.off('upgrade', onUpgrade)
            
        }
    }, [])
    
    
    return (
        <View style={styles.container}>
            <Text>State: {connected ? 'Connected': 'Disconnected'}</Text>
            <Text>Current transport: {currentTransport}</Text>
            <Text>Last Message: {lastMessage}</Text>
            <Button title="Convert" onPress={handleConnect} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

