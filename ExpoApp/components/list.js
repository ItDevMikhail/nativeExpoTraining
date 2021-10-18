import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Navbar } from './Navbar';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';


export function List() {
    const [todos, setTodos] = useState([]);

    const fetchTodo = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setTodos(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }

    const addTodo = (name) => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                name: name
            }
        ])
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <View >
            <Navbar title='Todo App' />
            <View style={styles.container}>
                <AddTodo onSubmit={fetchTodo} onAdd={addTodo} />

                <FlatList
                    data={todos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
                />

                {/* <View>
          {todos.map(todo => (<Todo key={todo.id} todo={todo} />))}
        </View> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    }
});