import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {

    const navigation  = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 3000)
    }, [])

    const getData = async()=>{
        const email = await AsyncStorage.getItem('EMAIL');
        if(email!== null){
            navigation.navigate('Home');
        }
        else{
            navigation.navigate('Login');
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../images/download.png')} style={styles.logo}/>
            <Text style={styles.logoText}>Welcome To , self-Mart App</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    logo:{
        width:200,
        height:200,
        borderRadius:100
    },
    logoText:{
        margin:10,
        fontSize:20,
        color:'gray'
    }
})