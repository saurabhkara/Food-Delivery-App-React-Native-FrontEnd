import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import colors from '../../theme/colors'

export default function UserInput({ placeholder, placeholderTextColor, onChangeText, value, secureTextEntry, maxLength,keyboardType, ...props}) {
    const[hasFocus, setHasFocus]=useState(false);
   
    return (
        <View style={{marginBottom:10}}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                value={value}
                style={[hasFocus?styles.focustextinput :styles.textinput,props.style]}
                secureTextEntry={secureTextEntry}
                maxLength={maxLength}
                onFocus={()=>setHasFocus(true)}
                onBlur={()=>setHasFocus(false)}
                keyboardType={keyboardType}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    textinput: {
        borderBottomWidth: 1,
        borderBottomColor: colors.black,
        opacity: 0.8
    },
    focustextinput: {
        borderBottomWidth: 1,
        borderBottomColor: colors.colorPrimary,
        opacity: 0.8
    },
    
})