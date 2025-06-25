import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserCard = ({ user }) => {
    const { name, email, phone, website, address } = user;

    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.label}>Email: <Text style={styles.value}>{email}</Text></Text>
            <Text style={styles.label}>Phone: <Text style={styles.value}>{phone}</Text></Text>
            <Text style={styles.label}>Website: <Text style={styles.value}>{website}</Text></Text>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>
                {address.street}, {address.suite}, {address.city} - {address.zipcode}
            </Text>
        </View>
    );
};

export default UserCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f5f9ff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2a2a72',
        marginBottom: 4,
    },
    label: {
        fontWeight: '600',
        marginTop: 6,
        color: '#1a237e',
    },
    value: {
        fontWeight: '400',
        color: '#333',
    },
});
