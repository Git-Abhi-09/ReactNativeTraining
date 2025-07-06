import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import React, { useState } from 'react';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    placeholder="Search your product here"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Image
                        source={require('../images/search.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Search</Text>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 40,
        backgroundColor: '#fff',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingRight: 10,
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: '#555',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});
