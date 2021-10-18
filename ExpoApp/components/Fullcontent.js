import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


export function FullContent({ route }) {


    return (
        <View>
            <Image style={styles.image} source={{ uri: route.params.img }} />
            <Text style={styles.header}>{route.params.title}</Text>
            <Text style={styles.full}>{route.params.full}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-light',
        textAlign: "center",
        fontSize: 16,
        marginTop: 20,
        color: '#f55151'
    },
    header: {
        fontSize: 25,
        marginTop: 25,
    },
    image: {
        width: '100%',
        height: 200,
    }
})