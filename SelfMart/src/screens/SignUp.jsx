import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
let isValid = true;

const SignUp = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [badName, setBadName] = useState(false);
    const [mobile, setMobile] = useState('');
    const [badMobile, setBadMobile] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [badEmail, setBaadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [badConfirmPassword, setBadConfirmPassword] = useState(false);
    const [buttonDisabled , setButtonDisabled] = useState(false)

    const handleValidate = () => {
        setButtonDisabled(true)
        if (name === '') {
            setBadName(true);
            isValid = false;
        } else {
            setBadName(false);
            isValid = true;
        }
        if (mobile === '') {
            setBadMobile(true);
            isValid = false;
        } 
        else if(mobile.length <10){
            setBadMobile(true);
        }
        else {
            setBadMobile(false);
            isValid = true;
        }
        if (email === '') {
            setBaadEmail(true);
            isValid = false;
        } else {
            setBaadEmail(false);
            isValid = true;
        }
        if (password === '') {
            setBadPassword(true);
            isValid = false;
        } else {
            setBadPassword(false);
            isValid = true;
        }
        if (confirmPassword === '') {
            setBadConfirmPassword(true);
            isValid = false;
        } else {
            setBadConfirmPassword(false);
            isValid = true;
        }
        if(password !== confirmPassword){
            setBadConfirmPassword(true);
            isValid = false;
        }
        else{
            setBadConfirmPassword(false)
            isValid = true;
        }
        setTimeout(()=>{
            if(isValid){
                saveData();
            }
            else{
                setButtonDisabled(false)
            }
        },3000)
    };

    const saveData = async ()=>{

            await AsyncStorage.setItem('NAME',name);
            await AsyncStorage.setItem('EMAIL',email);
            await AsyncStorage.setItem('MOBILE',mobile);
            await AsyncStorage.setItem('PASSWORD',password);
            navigation.goBack();
        
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image source={require('../images/download.png')} style={styles.logo} />
            <Text style={styles.text}>Create New Account</Text>
            <CustomTextInput
                placeholder="Enter your Name"
                value={name}
                onChangeText={txt => {
                    setName(txt);
                }}
                icon={require('../images/people.png')}
                type={'text'}
            />
            {badName ? (
                <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                    Please Enter your Name
                </Text>
            ) : null}
            <CustomTextInput
                placeholder="Enter your Phone no"
                value={mobile}
                onChangeText={txt => {
                    setMobile(txt);
                }}
                keybordType={'number-pad'}
                icon={require('../images/phone.png')}
                type={'text'}
            />
            {badMobile ? (
                <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                    Please Enter your Phone no
                </Text>
            ) : null}
            <CustomTextInput
                placeholder="Enter your Email ID"
                value={email}
                onChangeText={txt => {
                    setEmail(txt);
                }}
                icon={require('../images/email.png')}
                type={'email'}
            />
            {badEmail ? (
                <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                    Please Enter Eamil id
                </Text>
            ) : null}
            <CustomTextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={txt => {
                    setPassword(txt);
                }}
                icon={require('../images/padlock.png')}
                type={'password'}
            />
            {badPassword ? (
                <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                    Please Enter your password
                </Text>
            ) : null}
            <CustomTextInput
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={txt => {
                    setConfirmPassword(txt);
                }}
                icon={require('../images/padlock.png')}
                type={'password'}
            />
            {badConfirmPassword ? (
                <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                    Please Enter Confirm password
                </Text>
            ) : null}
            <CustomButton
                title={buttonDisabled ?'Creating...' : 'Sign Up'}
                bgColor={buttonDisabled ? 'gray' : '#FA812F'}
                textColor={'white'}
                disabled={buttonDisabled}
                onPress={() => {
                    handleValidate();
                }}
            />
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: '400',
                    alignSelf: 'center',
                    marginTop: 20,
                    textDecorationLine: 'underline',
                    marginBottom:60
                }}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                Already have Account ?
            </Text>
        </View>
        </ScrollView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
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
});
