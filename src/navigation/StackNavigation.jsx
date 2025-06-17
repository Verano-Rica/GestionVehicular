import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from '../Screens/LoginScreen';
import SalidaScreenForm from '../Screens/SalidaScreenForm';
import EntradaScreenForm from '../Screens/EntradaScreenForm';
import ControlLlantasScreen from '../Screens/Llantas';
import ValijaDigitalScreen from '../Screens/ValijaDigitalScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabs"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SalidaScreenForm"
        component={SalidaScreenForm}
        options={({ navigation }) => ({
          title: 'Registrar Salida',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconContainer}
            >
              <Icon name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EntradaScreenForm"
        component={EntradaScreenForm}
        options={({ navigation }) => ({
          title: 'Registrar Entrada',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconContainer}
            >
              <Icon name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ControlLlantas"
        component={ControlLlantasScreen}
        options={{ title: 'Control de Llantas' }}
      />
      <Stack.Screen
        name="ValijaDigital"
        component={ValijaDigitalScreen}
        options={{ title: 'Valija Digital' }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 10,
  },
});
