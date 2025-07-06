import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
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
    const [modalVisible, setModalVisible] = useState(false);
    
    const handleValidate = () => {
        let valid = true;
        if (email === '') {
            setBaadEmail(true);
            valid = false;
        } else {
            setBaadEmail(false);
        }

        if (password === '') {
            setBadPassword(true);
            valid = false;
        } else {
            setBadPassword(false);
        }

        return valid;
    };

    const getData = async () => {
        setModalVisible(true); // show loader
        const Email = await AsyncStorage.getItem('EMAIL');
        const Password = await AsyncStorage.getItem('PASSWORD');

        if (Email === email && Password === password) {
            setModalVisible(false);
            navigation.navigate(Home);
        } else {
            setModalVisible(false);
            Alert.alert('Error', 'Please Enter valid Email ID and Password');
        }
    };

    const handleLogin = () => {
        const isValid = handleValidate();
        if (isValid) {
            getData();
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >
                <Image source={require('../images/download.png')} style={styles.logo} />
                <Text style={styles.text}>Login</Text>
                <CustomTextInput
                    placeholder="Enter your Email ID"
                    value={email}
                    onChangeText={txt => setEmail(txt)}
                    icon={require('../images/email.png')}
                    type={'email'}
                />
                {badEmail && (
                    <Text style={styles.errorText}>Please Enter Email ID</Text>
                )}

                <CustomTextInput
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={txt => setPassword(txt)}
                    icon={require('../images/padlock.png')}
                    type={'password'}
                />
                {badPassword && (
                    <Text style={styles.errorText}>Please Enter Password</Text>
                )}

                <CustomButton
                    title={'Login'}
                    bgColor={'#FA812F'}
                    textColor={'white'}
                    onPress={handleLogin}
                />

                <Text
                    style={styles.createAccountText}
                    onPress={() => {
                        navigation.navigate('SignUp');
                    }}
                >
                    Create New Account ?
                </Text>

                {/* Uncomment below to use loader */}
                {/* <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 20,
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
    createAccountText: {
        fontSize: 15,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
    },
});
