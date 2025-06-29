import React from 'react';
import { View, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';
import Header from '../components/Header';
import { deleteTodo, toggleDone } from '../redux/todoSlice';

export default function HomeScreen({ navigation }) {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1 }}>
            <Header title="Todo List" />
            <FlatList
                data={todos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TodoItem
                        todo={item}
                        onDelete={id => dispatch(deleteTodo(id))}
                        onToggle={id => dispatch(toggleDone(id))}
                        onEdit={todo => navigation.navigate('AddEdit', { todo })}
                    />
                )}
            />
            <Button title="Add New Todo" onPress={() => navigation.navigate('AddEdit')} />
        </View>
    );
}
