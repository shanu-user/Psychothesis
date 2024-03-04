import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Signup() {
  return (
    <View style={styles.container}>
        <View>
        <Text>Name</Text>
        <TextInput placeholder="Enter your name" />
        </View>
        <View>
        <Text>Email</Text>
        <TextInput placeholder="Enter your email id"/>
        </View>
        <View>
          <Text>Password</Text>
          <TextInput placeholder="Enter your password"/>
        </View>
        <View>
          <Text>Retype Password</Text>
          <TextInput placeholder="Enter your password again to confirm"/>
        </View>
        <TouchableOpacity>
        <Text>
          Sign up
        </Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 100,
    left: 100
  }
})