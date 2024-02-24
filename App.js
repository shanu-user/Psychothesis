import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './pages/Login'
import Front from './pages/Front'
import Signup from './pages/Signup'
import User from './pages/User'
import Chat from './pages/Chat'
import ChatScreen from './screens/ChatScreen'
import VideoScreen from './screens/VideoScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'



export default function App() {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Front" component={Front}/>
        <Drawer.Screen name="User" component={User}/>
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Signup" component={Signup}/>
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="ChatScreen" component={ChatScreen} />
        <Drawer.Screen name="VideoChatScreen" component={VideoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: "f5f5f5",
    justifyContent: 'center',
  },
});
