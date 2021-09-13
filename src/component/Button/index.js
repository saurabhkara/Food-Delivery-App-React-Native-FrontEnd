import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import Fonts from '../../theme/Fonts';

export default function Button({title, onPress}) {


    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.text} >{title}</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    buttonStyle:{
        backgroundColor:colors.colorPrimary,
        paddingVertical:8,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
        borderRadius:20,
    }, 
    text:{
        fontSize:16,
        fontWeight:'500',
        fontFamily:Fonts.primarySemiBold,
        color:colors.white,
    }
})