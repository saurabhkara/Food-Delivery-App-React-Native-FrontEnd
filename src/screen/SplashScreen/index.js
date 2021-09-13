import React, {useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import AppStatusBar from '../../component/AppStatusBar';
import fonts from "../../theme/Fonts";
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
    const navigation=useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('WelcomeScreen')
        },3000)
    })
    return (
        <View style={styles.container}>
            <AppStatusBar  />
            <Text style={styles.textStyle}>Go Food</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.colorPrimary,
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:30,
        color:colors.white,
        fontFamily:fonts.primaryExtraBold,
    }
})