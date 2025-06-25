import React from 'react';
import { View, Button, ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api';
import UserCard from './UserCard';

const UserList = ({ fetchEnabled }) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        enabled: fetchEnabled,
    });

    if (isLoading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#1976d2" />
                <Text style={{ marginTop: 10 }}>Loading users...</Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={styles.center}>
                <Text style={{ color: 'red' }}>Error: {error.message}</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <UserCard user={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}
        />
    );
};

export default UserList;

const styles = StyleSheet.create({
    center: {
        marginTop: 30,
        alignItems: 'center',
    },
});
