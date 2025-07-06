import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [badName, setBadName] = useState(false);
    const [mobile, setMobile] = useState('');
    const [badMobile, setBadMobile] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [badConfirmPassword, setBadConfirmPassword] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleValidate = () => {
        let valid = true;
        setButtonDisabled(true);

        if (name.trim() === '') {
            setBadName(true);
            valid = false;
        } else {
            setBadName(false);
        }

        if (mobile.trim() === '' || mobile.length < 10) {
            setBadMobile(true);
            valid = false;
        } else {
            setBadMobile(false);
        }

        if (email.trim() === '') {
            setBadEmail(true);
            valid = false;
        } else {
            setBadEmail(false);
        }

        if (password.trim() === '' || password.length < 6) {
            setBadPassword(true);
            valid = false;
        } else {
            setBadPassword(false);
        }

        if (confirmPassword.trim() === '' || confirmPassword !== password) {
            setBadConfirmPassword(true);
            valid = false;
        } else {
            setBadConfirmPassword(false);
        }

        setTimeout(() => {
            if (valid) {
                saveData();
            } else {
                setButtonDisabled(false);
            }
        }, 1500);
    };

    const saveData = async () => {
        try {
            await AsyncStorage.setItem('NAME', name);
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('MOBILE', mobile);
            await AsyncStorage.setItem('PASSWORD', password);
            navigation.goBack();
        } catch (err) {
            console.log('AsyncStorage error: ', err);
            setButtonDisabled(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >
                <Image source={require('../images/download.png')} style={styles.logo} />
                <Text style={styles.text}>Create New Account</Text>

                <CustomTextInput
                    placeholder="Enter your Name"
                    value={name}
                    onChangeText={txt => setName(txt)}
                    icon={require('../images/people.png')}
                    type="text"
                />
                {badName && (
                    <Text style={styles.errorText}>Please enter your name</Text>
                )}

                <CustomTextInput
                    placeholder="Enter your Phone no"
                    value={mobile}
                    onChangeText={txt => setMobile(txt)}
                    keyboardType="number-pad"
                    icon={require('../images/phone.png')}
                    type="text"
                />
                {badMobile && (
                    <Text style={styles.errorText}>Please enter a valid 10-digit phone number</Text>
                )}

                <CustomTextInput
                    placeholder="Enter your Email ID"
                    value={email}
                    onChangeText={txt => setEmail(txt)}
                    icon={require('../images/email.png')}
                    type="email"
                />
                {badEmail && (
                    <Text style={styles.errorText}>Please enter your email ID</Text>
                )}

                <CustomTextInput
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={txt => setPassword(txt)}
                    icon={require('../images/padlock.png')}
                    type="password"
                />
                {badPassword && (
                    <Text style={styles.errorText}>Password must be at least 6 characters</Text>
                )}

                <CustomTextInput
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChangeText={txt => setConfirmPassword(txt)}
                    icon={require('../images/padlock.png')}
                    type="password"
                />
                {badConfirmPassword && (
                    <Text style={styles.errorText}>Passwords do not match</Text>
                )}

                <CustomButton
                    title={buttonDisabled ? 'Creating...' : 'Sign Up'}
                    bgColor={buttonDisabled ? 'gray' : '#FA812F'}
                    textColor="white"
                    disabled={buttonDisabled}
                    onPress={handleValidate}
                />

                <Text
                    style={styles.loginLink}
                    onPress={() => navigation.goBack()}
                >
                    Already have an account?
                </Text>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 40,
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
        fontWeight: '600',
        color: '#000',
    },
    errorText: {
        marginTop: 10,
        marginLeft: 30,
        color: 'red',
    },
    loginLink: {
        fontSize: 15,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
        marginBottom: 60,
    },
});
