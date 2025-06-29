import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../redux/todoSlice';

export default function AddEditScreen({ route, navigation }) {
    const dispatch = useDispatch();
    const editingTodo = route.params?.todo;
    const [text, setText] = useState('');

    useEffect(() => {
        if (editingTodo) {
            setText(editingTodo.text);
        }
    }, [editingTodo]);

    const handleSave = () => {
        if (editingTodo) {
            dispatch(editTodo({ id: editingTodo.id, text }));
        } else {
            dispatch(addTodo(text));
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter todo"
                value={text}
                onChangeText={setText}
            />
            <Button title="Save Todo" onPress={handleSave} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 },
});
