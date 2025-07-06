import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';
import Loader from '../common/Loader';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail, setBaadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [modalVisible , setModalVisible] = useState(true);

    const handleValidate = () => {
        setModalVisible(true);
        if (email === '') {
            setModalVisible(false);
            setBaadEmail(true);
        }
        else{
            setBaadEmail(false);
        }
        if (password === '') {
            setModalVisible(false);
            setBadPassword(true);
        }
        else{
            setBadPassword(false);
        }
    };


    const getData = async()=>{
        const Email = await AsyncStorage.getItem('EMAIL');
        const Password = await AsyncStorage.getItem('PASSWORD');

        if(Email === email && Password === password){
            setModalVisible(false);
            navigation.navigate(Home);
        }else{
            setModalVisible(false);
            Alert.alert('Error', 'Please Enter valid Email ID and Password');
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../images/download.png')} style={styles.logo} />
            <Text style={styles.text}>Login</Text>
            <CustomTextInput
                placeholder="Enter your Email ID"
                value={email}
                onChangeText={txt => {
                    setEmail(txt);
                }}
                icon={require('../images/email.png')}
                type={'email'}
            />
            {
                badEmail ? <Text style={{marginTop : 10 , marginLeft : 30 , color:'red'}}>Please Enter Eamil id</Text> : null
            }
            <CustomTextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={txt => {
                    setPassword(txt);
                }}
                icon={require('../images/padlock.png')}
                type={'password'}
            />
            {
                badPassword ? <Text style={{marginTop : 10 , marginLeft : 30 , color:'red'}}>Please Enter password</Text> : null
            }
            <CustomButton
                title={'login'}
                bgColor={'#FA812F'}
                textColor={'white'}
                onPress={() => {
                    handleValidate();
                    getData();
                }}
            />
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: '400',
                    alignSelf: 'center',
                    marginTop: 20,
                    textDecorationLine: 'underline',
                }}
                onPress={() => {
                    navigation.navigate('SignUp');
                }}
            >
                Create New Account ?
            </Text>
            {/* <Loader  modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 100,
    },
    text: {
        marginTop: 30,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 600,
        color: '#000',
    },
    input: {
        alignSelf: 'center',
        width: '85%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        marginTop: 30,
        paddingLeft: 20,
    },
});
