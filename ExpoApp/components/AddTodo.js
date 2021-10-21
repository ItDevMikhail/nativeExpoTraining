import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";


export const AddTodo = ({ onSubmit, onAdd }) => {
    const { colors } = useTheme();

    const [value, setValue] = useState('');

    const pressLoad = () => {
        onSubmit(value);
    }
    const pressHandler = () => {
        if (value.trim()) {
            onAdd(value);
            setValue('');
        } else {
            Alert.alert('The name todo\n cannot be empty')
        }
    }

    return (
        <View>
            <Button title='Loading todo list' onPress={pressLoad} />
            <View style={styles.block}>
                <TextInput
                    style={[styles.input, { color: colors.text }]}
                    // onChangeText={text => setValue(text)} === onChangeText={setValue}
                    onChangeText={setValue}
                    value={value}
                    placeholderTextColor={colors.text}
                    placeholder='Write the name of todo...'
                    autoCorrect={false} // авто исправление текста
                    autoCapitalize="none" // чтобы не делало первую букву заглавной
                />
                <Ionicons name='add-circle' size={30} color={colors.text} onPress={pressHandler} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 7
    },
    input: {
        flexGrow: 2,
        borderStyle: 'solid',
        paddingVertical: 7,
        paddingRight: 5,
    },
})