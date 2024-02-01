import { StyleSheet, View, Text, TextInput, Button, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

export default function Login() { 
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}

    if(!username) errors.username="Username is required"
    if(!password) errors.password="Password is required"

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if(validateForm())
    {
      console.log("Submitted", username, password)
      setUsername("")
      setPassword("")
      setErrors({})
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={styles.container}> 
      <View style={styles.form}>
        <Image source={require("../assets/adaptive-icon.png")} style={styles.image}/>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="Enter your username" value={username} onChange={setUsername}/>
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null }
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry value={password} onChange={setPassword}/>
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null }
        <Button title="Login" onPress={handleSubmit}/>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    opacity: 5
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: "center",
    marginBottom: 50
  },
  errorText: {
    color: "red",
    marginBottom: 10
  }
})