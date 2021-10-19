import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import TodoScreen from './TodoListScreen';
import AboutScreen from './AboutScreen';
import { FullContent } from '../components/Fullcontent';
import { StatusBar } from 'react-native';

const HomeStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (


    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="About"
            component={AboutStackScreen}
            options={{
                tabBarLabel: 'About',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="information-variant" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon name="person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Todo"
            component={TodoScreen}
            options={{
                tabBarLabel: 'Todo',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="clipboard-list" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Homee" component={HomeScreen} options={{
            title: 'Home',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
        <HomeStack.Screen name="FullContent" component={FullContent} options={{ title: 'Подробнее' }} />
    </HomeStack.Navigator>
);

const AboutStackScreen = ({ navigation }) => (
    <AboutStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <AboutStack.Screen name="Aboutt" component={AboutScreen} options={{
            title: 'About',
            headerLeft: () => (
                <Icon.Button name="menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </AboutStack.Navigator>
);
