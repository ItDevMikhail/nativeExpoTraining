import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const Todo = ({ todo, onRemove }) => {
    const { colors } = useTheme();

    const longPressHandler = () => {
        onRemove(todo.id)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log('pressed', todo.id)}
            // onLongPress={longPressHandler}
            onLongPress={onRemove.bind(null, todo.id)}
        >
            <View style={[styles.todo, { borderColor: colors.border }]}>
                <Text style={{ color: colors.text }}>{todo.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10
    }
})