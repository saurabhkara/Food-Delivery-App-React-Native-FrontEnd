import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Slider1 from '../../assets/images/slide1.png';
import Slider2 from '../../assets/images/slide2.png';
import Slider3 from '../../assets/images/slide3.png';
import Colors from '../../theme/colors';
import Fonts from '../../theme/Fonts';
import AppStatusBar from '../../component/AppStatusBar';
import { useNavigation } from '@react-navigation/native';
const slides = [
    {
      key: 1,
      title: 'Order Online',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: Slider1,
      
    },
    {
      key: 2,
      title: 'Your Choice',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: Slider2,
    },
    {
      key: 3,
      title: 'Fast Delivery',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image:Slider3,
    }
  ];


export default function WelcomeScreen() {

    const navigation=useNavigation();

    const _renderItem=({item})=>{
        return(
            <View style={styles.slide}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        )
    }
    
    const _onDone=()=>{
        navigation.replace('LoginScreen')
    }
    const _nextButton=()=>{
        return(
            <View style={styles.button}>
                <Text style={styles.next} >Next</Text>
            </View>
        )
    }

    const _doneButton=()=>{
        return(
            <View style={styles.button}>
                <Text style={styles.done}>Done</Text>
            </View>
        )
    }
    return (
            <View style={styles.container}> 
            <AppStatusBar />
            <AppIntroSlider 
                renderItem={_renderItem} 
                data={slides} 
                onDone={_onDone}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                bottomButton
                renderNextButton={_nextButton}
                renderDoneButton={_doneButton}
            />
            </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        zIndex:-1,
        backgroundColor:Colors.white,
    }, 
    dotStyle:{
        backgroundColor:Colors.black,
    },
    activeDotStyle:{
        backgroundColor:Colors.colorPrimary,
        width:25,
    },
    slide:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:70,
        backgroundColor:Colors.white,
    },
    image:{
        height:'60%',
        width:'100%',
        resizeMode:'contain'
    },
    title:{
        fontSize:30,
        fontWeight:'700',
        margin:5,
        fontFamily:Fonts.primaryExtraBold,
    },
    text:{
        fontFamily:Fonts.primaryRegular,
        fontSize:16,
        color:Colors.black,
        textAlign:'center',
        padding:10,
    },
    button:{
        width:150,
        backgroundColor:Colors.colorPrimary,
        paddingBottom:15,
        paddingTop:15,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:50,
        alignSelf:'center',
        
    },
    next:{
        alignSelf:'center',
        color:Colors.white,
        fontFamily:Fonts.primaryRegular,
        fontSize:16,
    },
    done:{
        alignSelf:'center',
        color:Colors.white,
        fontFamily:Fonts.primaryRegular,
        fontSize:16,
    }

})