import { StyleSheet, View, Text } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

export default function VideoScreen() {

  const [localStream, setLocalStream] = useState(null)
  const [remoteStream, setRemoteStream] = useState(null)

  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)

  return (
    <View>
      <Text>VideoScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
})