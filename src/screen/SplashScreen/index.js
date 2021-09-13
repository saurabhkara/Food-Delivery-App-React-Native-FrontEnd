import React, {useEffect} from 'react'
import { View, Text, StyleSheet,Image } from 'react-native';
import colors from '../../theme/colors';
import AppStatusBar from '../../component/AppStatusBar';
import fonts from "../../theme/Fonts";
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/logo-light.png'

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
           <Image source={Logo} style={styles.logo}/>
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
    },
    logo:{
        height:200,
        width:200,
        resizeMode:'contain'
    }
})