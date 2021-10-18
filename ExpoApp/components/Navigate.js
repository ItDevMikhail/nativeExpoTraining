import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './home';
import { List } from "./list";
import { About } from './about';
import { FullContent } from "./Fullcontent";
import { Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="Homee" component={Home} />
            <HomeStack.Screen name="FullContent" component={FullContent} />
        </HomeStack.Navigator >
    );
}

export default function Navigate() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor='#eb5d3d' barStyle='light-content' />
            <Tab.Navigator>
                <Tab.Group screenOptions={{
                    headerTitleStyle: { height: 0 },
                    headerStyle: {
                        height: 0,
                    },
                    tabBarItemStyle: { paddingTop: 15 },
                    tabBarLabelStyle: { fontSize: 16, paddingTop: 10 },
                    tabBarStyle: { backgroundColor: '#eb5d3d' },
                }} >
                    <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: 'Сooбщения', tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name='message' size={size} color={color} /> }} />
                    <Tab.Screen name="List" component={List} options={{ title: 'Список', tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name="clipboard-list" size={size} color={color} /> }} />
                    <Tab.Screen name="About" component={About} options={{ title: 'О нас', tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name="information-variant" size={size} color={color} /> }} />
                </Tab.Group>
            </Tab.Navigator>
        </NavigationContainer >
    );
}
