import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Wishlist = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/like.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.text}>Wishlist Coming Soon</Text>
        </View>
    );
};

export default Wishlist;

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
