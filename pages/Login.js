import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Email</Text>
        <TextInput />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})