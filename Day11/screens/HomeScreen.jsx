import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { clearSession } from '../utils/storage';

const HomeScreen = ({ navigation }) => {
    const logout = async () => {
        await clearSession();
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome! 🎉</Text>
            <Button title="Logout" onPress={logout} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});
