import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
    const { name, email, phone } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Details</Text>

            <Text style={styles.label}>Name: <Text style={styles.value}>{name}</Text></Text>
            <Text style={styles.label}>Email: <Text style={styles.value}>{email}</Text></Text>
            <Text style={styles.label}>Phone: <Text style={styles.value}>{phone}</Text></Text>

            <View style={styles.button}>
                <Button title="Back to Form" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f1f2f6' },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2d3436',
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#34495e',
    },
    value: {
        fontWeight: 'bold',
        color: '#1abc9c',
    },
    button: {
        marginTop: 30,
    },
});

export default DetailsScreen;
