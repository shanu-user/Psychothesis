import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Email</Text>
        <TextInput placeholder="Enter your email" />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput placeholder="Enter your password" />
      </View>
      <TouchableOpacity>
        <Text>
          Login
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
  },

})