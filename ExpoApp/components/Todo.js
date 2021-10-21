import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Todo = ({ todo, onRemove }) => {
    const { colors } = useTheme();

    const removeHandler = () => {
        Alert.alert('Delete', 'Are you sure you want to delete?', [{ text: 'Ok', onPress: () => onRemove(todo.id) }, { text: 'Cancel' }])
    }

    return (

        <View style={[styles.todo, { borderColor: colors.border }]}>
            <Text style={{ color: colors.text, padding: 10 }}>{todo.name}</Text>
            <MaterialIcons.Button name="delete" size={24} color={colors.text} onPress={removeHandler} backgroundColor='rgba(255,255,255, 1)' style={{ padding: 0, paddingLeft: 6, paddingVertical: 5 }} />
        </View >
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10
    }
})