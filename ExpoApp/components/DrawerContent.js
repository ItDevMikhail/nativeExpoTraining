import React, { useState, useContext } from "react";
import { View, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { Ionicons, Octicons, Feather, AntDesign } from "@expo/vector-icons";
import { AuthContext } from '../components/context';

export function DrawerContent(props) {

    const insets = useSafeAreaFrame();
    const paperTheme = useTheme();
    const { toggleTheme, signOut } = useContext(AuthContext);


    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: insets.top, }}>

                <ImageBackground source={require('../assets/bg.jpg')} resizeMode="cover" style={{ width: '100%', flex: 1 }}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('Profile') }}>
                                <Avatar.Image source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Ours_des_pyrenees_aspe_2002.jpg/220px-Ours_des_pyrenees_aspe_2002.jpg'
                                }} size={50} />
                            </TouchableWithoutFeedback>
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Mikhail</Title>
                                <Caption style={styles.caption}>@Mischanja</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Ionicons name="home-outline" size={size} color={color} />
                            )}
                            label="Домой"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Feather name="user" size={size} color={color} />
                            )}
                            label="Профиль"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <AntDesign name="contacts" size={size} color={color} />
                            )}
                            label="Контакты"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Feather name="bookmark" size={size} color={color} />
                            )}
                            label="Избранные"
                            onPress={() => { props.navigation.navigate('BookmarkScreen') }}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Ionicons name="md-settings-outline" size={size} color={color} />
                            )}
                            label="Настройки"
                            onPress={() => { props.navigation.navigate('SettingsScreen') }}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Feather name="user-check" size={size} color={color} />
                            )}
                            label="Помощь"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} color='white' />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView >
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Drawer.Item
                    icon={({ color, size }) => (
                        <Octicons name="sign-out" size={size} color={color} />
                    )}
                    label="Выйти"
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
        </View >
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        marginTop: 30,
        paddingBottom: 10
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});