import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';


export const AddTodo = ({ onSubmit, onAdd }) => {
    const [value, setValue] = useState('');

    const pressLoad = () => {
        onSubmit(value);
    }
    const pressHandler = () => {
        if (value.trim()) {
            onAdd(value);
            setValue('');
        } else {
            Alert.alert('Название дела не может быть пустым')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                // onChangeText={text => setValue(text)} === onChangeText={setValue}
                onChangeText={setValue}
                value={value}
                placeholder='Введите название дела...'
                autoCorrect={false} // авто исправление текста
                autoCapitalize="none" // чтобы не делало первую букву заглавной
            />
            <View>
                <Button title='Загрузить' onPress={pressLoad} />
                <Button title='Добавить' onPress={pressHandler} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})