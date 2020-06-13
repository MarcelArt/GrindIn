/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeView from './src/views/HomeView';
import ProfileView from './src/views/ProfileView';
import Footer from './src/components/Footer';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Profile" component={ProfileView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
