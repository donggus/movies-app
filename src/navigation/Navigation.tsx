import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

// Define which type of params are getting each screen.
export type RootStackParams = {
    HomeScreen: undefined;
    DetailScreen: Movie;
};

const Stack = createNativeStackNavigator<RootStackParams>();


export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: '#113155'
            }
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}