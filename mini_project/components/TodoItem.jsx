import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TodoItem({ todo, onEdit, onDelete, onToggle }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, todo.done && styles.done]}>
                {todo.text}
            </Text>
            <View style={styles.actions}>
                <Button title="Done" onPress={() => onToggle(todo.id)} />
                <Button title="Edit" onPress={() => onEdit(todo)} />
                <Button title="Del" onPress={() => onDelete(todo.id)} color="red" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { margin: 10, padding: 15, backgroundColor: '#ecf0f1', borderRadius: 5 },
    text: { fontSize: 16 },
    done: { textDecorationLine: 'line-through', color: 'green' },
    actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
});
