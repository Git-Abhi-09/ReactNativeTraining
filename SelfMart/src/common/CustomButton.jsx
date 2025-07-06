import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, title, bgColor , textColor , disabled }) => {
    return (
        <TouchableOpacity
        disabled={disabled}
            onPress={()=>{
                onPress();
            }}
            style={[styles.btn, { backgroundColor: bgColor || '#007bff' }]} >
                <Text style={{color : textColor , fontSize:20 }}> {title || 'Custom Button'}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        justifyContent:'center',
        alignItems : 'center',
        width:'85%',
        height:50,
        borderRadius:10,
        alignSelf : 'center',
        marginTop:30
    }
});