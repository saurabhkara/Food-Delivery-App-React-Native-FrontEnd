import React from 'react'
import { View, Text, StatusBar } from 'react-native';
import colors from '../../theme/colors';

export default function AppStatusBar({backgroundColor, barStyle, translucent}) {
    return (
        <StatusBar
            backgroundColor={ backgroundColor? backgroundColor: colors.colorPrimary}
            barStyle={barStyle? barStyle:'default'}
            translucent={translucent?true:false}    
        />
    )
}
