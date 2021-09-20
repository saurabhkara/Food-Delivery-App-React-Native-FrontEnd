import React,{useState} from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';
import AppStatusBar from '../../component/AppStatusBar';
import Logo from '../../component/Logo';
import UserInput from '../../component/UserInput';
import Fonts from '../../theme/Fonts';
import Button from '../../component/Button';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';

export default function RegisterScreen() {
    
    const[name, onChangeName]=useState();
    const[mobile, onChangeMobile]=useState();
    const[password, onChangePassword]=useState();

    const buttonClick=()=>{
        if(name.trim().length <3){
            Toast.show('Please Enter Valid Name', Toast.LONG);
        }
        else if( mobile.trim().length !==10 ){
            Toast.show('Please Enter Valid Mobile Number', Toast.LONG);
        }
        else if( password==undefined || password.trim().length <6){
            Toast.show('Please Enter Valid Password', Toast.LONG);
        }
        else{

            navigation.navigate('OtpScreen')
        }
    }
    const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <AppStatusBar />
            
            <ScrollView style={styles.scrollview}>
                <View style={{marginTop:20, marginBottom:20}}>
                    <Logo />
                    <Text style={styles.title}>Create a New Accont</Text>
                    <Text style={styles.text}>Enter your Details</Text>
                   <View style={{position:'relative'}}>
                    <UserInput 
                            placeholder="Enter Your Name" 
                            maxLength={10}
                            value={name}
                            onChangeText={onChangeName}
                            style={{paddingLeft:30}}
                        />
                        <Icon name='user' size={24} color={colors.black}  style={{position:'absolute', top:12}}/>
                    </View>
                  
                   <View style={{position:'relative'}}>
                        <UserInput 
                            placeholder="Enter Mobile Number" 
                            maxLength={10}
                            value={mobile}
                            onChangeText={onChangeMobile}
                            keyboardType='numeric'
                            style={{paddingLeft:30}}
                        />
                        <Icon name='smartphone' size={24} color={colors.black}  style={{position:'absolute', top:12}}/>
                    </View>

                    <View style={{position:'relative'}} >
                        <UserInput 
                            placeholder="Enter Password" 
                            secureTextEntry={true} maxLength={20}
                            value={password}
                            onChangeText={onChangePassword}
                            style={{paddingLeft:30}}
                        />
                        <Icon name='lock' size={24} color={colors.black}  style={{position:'absolute', top:12}}/>
                    </View> 
                   <Button title='Register' onPress={buttonClick} />
                   <TouchableOpacity style={{alignItems:'center'}}onPress={()=>navigation.navigate('LoginScreen')}>
                       <Text>Existing User? Login </Text>
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