import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Card = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/purchase.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.text}>Coming Soon</Text>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
        color: '#555',
    },
});
