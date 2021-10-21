import React, { useState, useContext } from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import {
    Caption,
    Paragraph,
    List,
    Text,
    Divider,
    TouchableRipple
} from 'react-native-paper';
import { Ionicons, Feather, MaterialCommunityIcons, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../components/context';

const ProfileScreen = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <ScrollView style={styles.container, { backgroundColor: 'rgba(160,160,160, 0.3)' }}>
            <ImageBackground source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Ours_des_pyrenees_aspe_2002.jpg/220px-Ours_des_pyrenees_aspe_2002.jpg'
            }}
                resizeMode="cover" style={{ width: '100%', height: 250, justifyContent: 'space-between' }}>
                <TouchableRipple style={{ borderRadius: 20, padding: 5, width: 35, marginTop: '8%', marginLeft: '4%' }}
                    onPress={() => navigation.goBack()}
                    rippleColor="rgba(255,255,255, 0.2)"
                    borderless={true}>
                    <Ionicons name="arrow-back-outline" size={24} color='white' />
                </TouchableRipple>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={styles.textHeader}>Mikhail</Text>
                    <Caption style={styles.textHeader}>online</Caption>
                </View>
            </ImageBackground>
            <View style={[styles.block, { backgroundColor: colors.background }]}>
                <Paragraph style={styles.paragraph}>Account</Paragraph>
                <View style={styles.userInfo}>
                    <Text style={{ color: colors.text }}>@Mischanja</Text>
                    <Caption style={{ color: colors.text }}>User name</Caption>
                </View>
                <Divider />
                <View style={styles.userInfo}>
                    <Text style={{ color: colors.text }}>About me</Text>
                    <Caption style={{ color: colors.text }}>Add a few words about yourself</Caption>
                </View>
            </View>
            <View style={[styles.block, { backgroundColor: colors.background, marginTop: 7, borderTopWidth: 1 }]}>
                <Paragraph style={styles.paragraph}>Settings</Paragraph>
                <List.Item
                    title="Notifications and Sounds"
                    left={props => <List.Icon {...props} icon={({ color, size }) => (
                        <MaterialCommunityIcons name="bell-outline" size={size} color={color} />
                    )} />}
                    onPress={() => { console.log('listclick') }}
                />
                <Divider />
                <List.Item
                    title="Privacy and Security"
                    left={props => <List.Icon {...props} icon={({ color, size }) => (
                        <MaterialCommunityIcons name="lock-outline" size={size} color={color} />
                    )} />}
                    onPress={() => { console.log('listclick') }}
                />
                <Divider />
                <List.Item
                    title="Data and Storage"
                    left={props => <List.Icon {...props} icon={({ color, size }) => (
                        <Feather name="database" size={size} color={color} />
                    )} />}
                    onPress={() => { console.log('listclick') }}
                />
                <Divider />
                <List.Item
                    title="Folders"
                    left={props => <List.Icon {...props} icon={({ color, size }) => (
                        <Feather name="folder" size={size} color={color} />
                    )} />}
                    onPress={() => { console.log('listclick') }}
                />
                <Divider />
                <List.Item
                    title="Language"
                    left={props => <List.Icon {...props} icon={({ color, size }) => (
                        <FontAwesome name="language" size={size} color={color} />
                    )} />}
                    onPress={() => { console.log('listclick') }}
                />
            </View>
            <View style={[styles.block, { marginTop: 7, borderTopWidth: 1, backgroundColor: colors.background }]}>
                <Paragraph style={styles.paragraph}>Помощь</Paragraph>
                <List.Item
                    title="Ask a Question"
                    left={props => <List.Icon {...props} icon={({ color, size }) => (
                        <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
                    )} />}
                    onPress={() => { console.log('listclick') }}
                />
                <Divider />
                <List.Item
                    title="App FAQ"
                    left={props => <List.Icon {...props} icon={({ color, size }) => (
                        <SimpleLineIcons name="question" size={size} color={color} />
                    )} />}
                    onPress={() => { console.log('listclick') }}
                />
                <Divider />
                <List.Item
                    title="Privacy Policy"
                    titleStyle={{}}
                    left={props => <List.Icon {...props} icon={({ color, size }) => (
                        <MaterialCommunityIcons name="shield-check-outline" size={size} color={color} />
                    )} />}
                    onPress={() => { console.log('listclick') }}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Caption>@Copyright for my App</Caption>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    block: {
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(160,160,160, 0.7)'
    },
    textHeader: {
        color: '#fff',
    },
    paragraph: {
        fontWeight: 'bold',
        paddingVertical: 10,
        color: "#694fad"
    },
    userInfo: {
        paddingVertical: 3
    },
    settings: {

    }

});