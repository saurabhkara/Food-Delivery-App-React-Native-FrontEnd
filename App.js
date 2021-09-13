import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screen/SplashScreen/index'
import WelcomeScreen from './src/screen/WelcomeScreen/index';

const Stack = createNativeStackNavigator();

export default function App() {

  const IntailStackScreen=()=>(
    
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
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


