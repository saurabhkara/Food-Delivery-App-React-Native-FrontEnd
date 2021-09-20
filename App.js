import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screen/SplashScreen/index'
import WelcomeScreen from './src/screen/WelcomeScreen/index';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import OtpScreen from './src/screen/OtpScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const IntailStackScreen=()=>(
    
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
      </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <IntailStackScreen/>
    </NavigationContainer>
    
  )
}




const styles = StyleSheet.create({
  conatiner:{
    backgroundColor:'pink',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  header:{
    fontSize:50,
    fontWeight:'bold'
  }
 
});


