import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const UserInfoCard = ({ user, idx }) => {
    const isRemoteImage = typeof user.image === 'string' && user.image.startsWith('http');

    return (
        <View style={styles.card} key={idx}>
            <View style={styles.imageContainer}>
                {user.image ? (
                    <Image
                        source={isRemoteImage ? { uri: user.image } : user.image}
                        style={styles.avatarImage}
                    />
                ) : (
                    <Text style={styles.avatarText}>{user.name?.[0]?.toUpperCase() || '?'}</Text>
                )}
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.subtitle}>user{idx + 1}@example.com</Text>
            </View>
        </View>
    );
};

export default UserInfoCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 5,
        marginHorizontal: 4,
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#4f6cff',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    avatarImage: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
    },
    avatarText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
    },
    infoContainer: {
        marginLeft: 16,
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
    },
    subtitle: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },
});
