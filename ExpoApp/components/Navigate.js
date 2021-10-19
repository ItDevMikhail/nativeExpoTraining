import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './home';
import { List } from "./list";
import { About } from './about';
import { FullContent } from "./Fullcontent";
import { Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, useWindowDimensions } from 'react-native';
import { DrawerContent } from "./DrawerContent";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



export default function DrawerNavigator() {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    return (
        <NavigationContainer>
            <StatusBar backgroundColor='#eb5d3d' barStyle='light-content' />
            <Drawer.Navigator defaultStatus='closed' drawerContent={props => <DrawerContent {...props} />}
                screenOptions={({ route }) => ({
                    // headerShown: false,
                    headerShown: route.path === 'List' ? true : false,
                    // drawerType: isLargeScreen ? 'permanent' : 'back',
                    drawerStyle: isLargeScreen ? null : { width: '70%' },
                    overlayColor: 'transparent',
                })}
            >
                <Drawer.Screen name="Home" component={Navigate} />
                <Drawer.Screen name="List" component={List} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </NavigationContainer >
    );
}

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{
            // headerShown: false
        }}>
            <HomeStack.Screen name="Home" component={Home} options={{ title: 'Сooбщения' }} />
            <HomeStack.Screen name="FullContent" component={FullContent} options={{ title: 'Подробнее' }} />
        </HomeStack.Navigator >
    );
}

function Navigate() {
    return (
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
                <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{ title: 'Сooбщения', tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name='message' size={size} color={color} /> }} />
                <Tab.Screen name="List" component={List} options={{ title: 'Список', tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name="clipboard-list" size={size} color={color} /> }} />
                <Tab.Screen name="About" component={About} options={{ title: 'О нас', tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name="information-variant" size={size} color={color} /> }} />
            </Tab.Group>
        </Tab.Navigator>
    );
}
