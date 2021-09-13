import React,{useState} from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';
import AppStatusBar from '../../component/AppStatusBar';
import Logo from '../../component/Logo';
import UserInput from '../../component/UserInput';
import Fonts from '../../theme/Fonts';
import Button from '../../component/Button';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const[mobile, onChangeMobile]=useState();
    const[Password, onChangePassword]=useState();

    const buttonClick=()=>{
        Alert.alert('Button Pressed')
    }
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <AppStatusBar />
            
            <ScrollView style={styles.scrollview}>
                <View style={{marginTop:20, marginBottom:20}}>
                    <Logo />
                    <Text style={styles.title}>Login into Go Food </Text>
                    <Text style={styles.text}>Enter your Registered Number </Text>
                   <UserInput 
                        placeholder="Enter Mobile Number" 
                        maxLength={10}
                        value={mobile}
                        onChangeText={onChangeMobile}
                        keyboardType='numeric'
                    />
                   <UserInput 
                        placeholder="Enter Password" 
                        secureTextEntry={true} maxLength={20}
                        value={Password}
                        onChangeText={onChangePassword}
                    />
                   <Button title='Login' onPress={buttonClick} />
                   <TouchableOpacity style={{alignItems:'center'}} onPress={()=>navigation.navigate('RegisterScreen')}>
                       <Text>Login ?  Please Register </Text>
                   </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        
    },
    logo:{
        height:200,
        width:150,
        resizeMode:'contain'
    },
    scrollview:{
        padding:20
    },
    title:{
        fontSize:20,
        fontFamily:Fonts.primaryBold,
        color:colors.black,
        marginVertical:20,

    },
    text:{
        fontSize:14,
        fontFamily:Fonts.primaryRegular,
        color:colors.grey,
        marginVertical:20,
    }
})