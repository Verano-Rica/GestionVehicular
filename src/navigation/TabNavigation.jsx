import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, StyleSheet } from 'react-native';

import HomeScreen from '../Screens/HomeScreen';
import SalidaScreen from '../Screens/SalidaScreen';
import EntradaScreen from '../Screens/EntradaScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation({ route, navigation }) {
  
  const { user } = route.params || {};

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home-outline';
          if (route.name === 'Salida') iconName = 'log-out-outline';
          else if (route.name === 'Entrada') iconName = 'log-in-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex' },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconContainer}>
            <Icon name="menu-outline" size={30} color="black" />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen name="Home">
        {props => <HomeScreen {...props} user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Salida">
        {props => <SalidaScreen {...props} route={route} />}
      </Tab.Screen>
      <Tab.Screen name="Entrada">
        {props => <EntradaScreen {...props} route={route} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 10,
  },
});
