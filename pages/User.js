import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { useState } from 'react'
export default function User({route, navigation}) {

    const [section, setSection] = useState("Login")

    

    return (
        <View style={styles.container}>
        <Image source={require("../assets/login_logo.png")} style={styles.login_logo}/>
        <View style={styles.section_switch}>
          <TouchableOpacity onPress={() => setSection("Login")} style={styles.section_switch_btn}>
              <Text style={styles.section_switch_text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSection("Signup")} style={styles.section_switch_btn}>
              <Text style={styles.section_switch_text}>
                  Signup
              </Text>
          </TouchableOpacity>
        </View>
        <View>
          {section === "Login" ? <Login /> : <Signup />}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%"
  },
  section_switch: {
    paddingLeft: 80,
    paddingTop: 50,
    display: "flex", 
    flexDirection: "row"
  },
  login_logo: {
    marginLeft: 50,
    marginTop: 50,
    width: 300,
    height: 200
  },
  section_switch_btn: {
    paddingRight: 100,
  },
  section_switch_text: {
    fontSize: 20,

  }
})