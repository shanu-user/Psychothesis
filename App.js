import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './pages/Login'
import Chat from './pages/Chat'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'



export default function App() {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Chat" component={Chat} />
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
