import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FavoriteProvider } from './src/context/FavoriteContext';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }:any) => {
  return (
    <GradientProvider>
    <FavoriteProvider>
      {children}
    </FavoriteProvider>
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  )
}


export default App;