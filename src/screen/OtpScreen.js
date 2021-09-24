
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import AppStatusBar from '../component/AppStatusBar';
import MailImage from '../assets/images/mail_box_img.png'
import Fonts from '../theme/Fonts';
import colors from '../theme/colors';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Button from '../component/Button';

// create a component
class OtpScreen extends Component {
    pinInput= React.createRef();
    constructor(props){
        super(props)
        this.state={ 
            code:''
        }
    }
   
    componentDidMount(){
        
        console.log(JSON.stringify(this.props.route.params.phone));
    }
    _checkCode=(code)=>{
        // Alert.alert(code);
    }
    verifyOTP=()=>{
        console.log(JSON.stringify(this.props.route.params.phone));
        Alert.alert(JSON.stringify(this.props.route.params.phone));
    }
    render() {
        return (
            <View style={styles.container}>
                <AppStatusBar />
                <View  style={styles.imageContainer}>
                    <Image source={MailImage} style={styles.imageStyle} />
                </View>
                <View style={{display:'flex', alignItems:'center', paddingHorizontal:20}} >
                    <Text style={styles.header}>OTP Verification</Text>
                    <Text style={styles.subHeader}>Please enter Verification code sent to your mobile Number {this.props.route.params.phone}</Text>
                </View>
                <View style={{alignItems:'center',margin:20,}}>
                    <SmoothPinCodeInput
                        ref={this.pinInput}
                        value={this.state.code}
                        onTextChange={code => this.setState({ code })}
                        onFulfill={this._checkCode}
                        autoFocus={true}
                        cellStyleFocused={{
                            borderColor:colors.colorPrimary,
                        }}
                        cellSpacing={15}
                    />
                </View>
                <Button title='Verify OTP' onPress={this.verifyOTP} />
               
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        marginHorizontal:30
    },
    imageStyle:{
        maxWidth:250,
        maxHeight:250,
        resizeMode:'contain',
    },
    imageContainer:{
        display:'flex',
        alignItems:'center',
        height:260,
        marginTop:70,
        

    },
    header:{
        fontFamily:Fonts.primaryBold,
        fontSize:25,
        color:colors.black,
        marginTop:30,
        fontWeight:'bold'
    },
    subHeader:{
        fontSize:16,
        fontFamily:Fonts.primaryRegular,
        textAlign:'center',
        marginTop:10,
        color:colors.grey,
    }
});

//make this component available to the app
export default OtpScreen;
