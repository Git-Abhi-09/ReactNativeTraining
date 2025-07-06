import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        mobile: '',
    });

    const getUserData = async () => {
        const name = await AsyncStorage.getItem('NAME');
        const email = await AsyncStorage.getItem('EMAIL');
        const mobile = await AsyncStorage.getItem('MOBILE');

        setUser({
            name: name || '',
            email: email || '',
            mobile: mobile || '',
        });
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>User Profile</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.value}>{user.name}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{user.email}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Mobile:</Text>
                    <Text style={styles.value}>{user.mobile}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    container: {
        padding: 20,
        alignItems: 'stretch',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        alignSelf: 'center',
        marginBottom: 30,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    label: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    value: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
    },
});
