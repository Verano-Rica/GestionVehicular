import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './src/contexts/UserContext';
import DrawerNavigation from './src/navigation/DrawerNavigation';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </UserProvider>
  );
}
