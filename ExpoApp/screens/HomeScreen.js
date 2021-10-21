import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {

    const [content, setContent] = useState([
        { title: 'Google', anons: 'Gooogle!!!', full: 'Gooogle is cool!', key: '1', img: 'https://1prof.by/storage/2021/01/google-485611_1280-1024x723.png' },
        { title: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!', key: '2', img: 'https://games.mail.ru/pre_895x0_resize/hotbox/content_files/news/2021/09/14/095a555d711f42f09071468bdb4e0b6a.jpg?quality=85&format=webp' },
        { title: 'FaceBook', anons: 'FaceBook!!!', full: 'FaceBook is cool!', key: '3', img: 'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/3/68/756333852072683.jpg' },
    ]);

    const { colors } = useTheme();

    const theme = useTheme();

    return (
        <View style={styles.home}>
            <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} backgroundColor='rgba(0,0,0, 0.2)' translucent={true} />
            <FlatList
                data={content}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.block, theme.dark ? { borderColor: '#404040' } : { borderColor: '#000' }]} onPress={() => navigation.navigate('FullContent', item)}>
                        <Image style={styles.img} source={{ uri: item.img }}></Image>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.anons}>{item.anons}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            >
            </FlatList>
        </View>

    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    block: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderBottomWidth: 1.5,
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 15,
        marginVertical: 7
    },
    title: {
        paddingTop: 3,
        fontSize: 20,
        fontFamily: 'mt-bold',
        color: '#fff',
        paddingEnd: 50

    },
    anons: {
        fontSize: 16,
        fontFamily: 'mt-light',
        color: '#fff',
        paddingEnd: 50
    }
})