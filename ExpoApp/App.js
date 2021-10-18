import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import Navigate from './components/Navigate';
import AppLoading from 'expo-app-loading';


const fonts = () => Font.loadAsync({
  'mt-bold': require('./fonts/Montserrat-Bold.ttf'),
  'mt-light': require('./fonts/Montserrat-Light.ttf'),
});

export default function App() {

  const [font, setFont] = useState(false);


  if (font) {
    return (
      <Navigate />
    )
  } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
    );
  }
}

