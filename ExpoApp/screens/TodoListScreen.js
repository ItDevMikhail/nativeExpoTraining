import React, { useState } from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { Navbar } from '../components/Navbar';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';


export default function TodoListScrean() {
    const [todos, setTodos] = useState([]);


    const fetchTodo = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setTodos(data);
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
        <View style={{ flex: 1 }}>
            <Navbar title='Todo App' />
            <View style={styles.container}>
                <AddTodo onSubmit={fetchTodo} onAdd={addTodo} />
                {/* <View>
          {todos.map(todo => (<Todo key={todo.id} todo={todo} />))}
        </View> */}
                <FlatList
                    data={todos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
                /></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        flex: 1
    }
});