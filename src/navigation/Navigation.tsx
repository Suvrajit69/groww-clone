import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/dashboard/HomeScreen';
import {useCustomTheme} from './Theme';
import {navigationRef} from '../utils/NavigationUtil';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const theme = useCustomTheme();

  const myTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
      text: theme.colors.text,
      card: theme.colors.card,
      border: theme.colors.border,
      notification: theme.colors.notification,
      primary: theme.colors.primary,
    },
  };

  return (
    <NavigationContainer ref={navigationRef} theme={myTheme}>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
