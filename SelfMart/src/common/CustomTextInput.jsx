import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CustomTextInput = ({value , onChangeText , placeholder , icon , type , keybordType}) => {

    return (
        <View style={styles.textFeild}>
            <Image source={icon} style={{width:24 , height:24}}/>
            <TextInput style={styles.inputVal} value={value} keybordType={keybordType ? keybordType : "default"} onChangeText={(txt)=>{onChangeText(txt)}} secureTextEntry={type === 'password' ? true : false}  placeholder={placeholder}/>
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    textFeild:{
        width:'85%',
        height:50,
        borderWidth:0.5,
        borderRadius:10,
        alignSelf:'center',
        marginTop : 30,
        flexDirection : 'row',
        alignItems : 'center',
        paddingLeft : 20,
        paddingRight : 20
    },
    inputVal : {
        marginLeft : 10
    }
})