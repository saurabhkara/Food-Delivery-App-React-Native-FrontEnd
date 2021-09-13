import React from 'react'
import {Image } from 'react-native';
import LogoImage from '../../assets/images/logo.png'

export default function Logo() {
    return (
        <Image source={LogoImage} style={{height:80,width:140, resizeMode:'contain', alignSelf:'center'}}/>
    )
}
