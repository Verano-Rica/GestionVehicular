import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/Screens/HomeScreen';
import SalidaScreen from './src/Screens/SalidaScreen';
import EntradaScreen from './src/Screens/EntradaScreen';
import ControlLlantasScreen from './src/Screens/Llantas';
import LoginScreen from './src/Screens/LoginScreen';
import SearchNominaScreen from './src/Screens/SearchNominaScreen';
import SalidaScreenForm from './src/Screens/SalidaScreenForm';
import EntradaScreenForm from './src/Screens/EntradaScreenForm';
import ValijaDigitalScreen from './src/Screens/ValijaDigitalScreen';
import { UserProvider, useUser } from './src/contexts/UserContext.jsx'; // Importa el contexto

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MainTabs({ route, navigation }) {
  const { user } = route.params || {}; // Maneja el caso en que route.params sea undefined

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Salida') {
            iconName = 'log-out-outline';
          } else if (route.name === 'Entrada') {
            iconName = 'log-in-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          display: 'flex',
        },
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

function DrawerContent({ navigation }) {
  const { user } = useUser(); // Usa el contexto para obtener los datos del usuario

  return (
    <View style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerText}>Hola, </Text>
        <Text style={styles.drawerText}>{user?.R_nombre}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ControlLlantas')} style={styles.drawerButton}>
        <Icon name="car-outline" size={20} color="white" style={styles.drawerIcon} />
        <Text style={styles.drawerButtonText}>Control de Llantas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ValijaDigital')} style={styles.drawerButton}>
        <Icon name="document-outline" size={20} color="white" style={styles.drawerIcon} />
        <Text style={styles.drawerButtonText}>Valija Digital</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.drawerButton}>
        <Icon name="log-out-outline" size={20} color="white" style={styles.drawerIcon} />
        <Text style={styles.drawerButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login" 
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconContainer}>
            <Icon name="menu-outline" size={30} color="black" />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="SalidaScreen" component={SalidaScreen} options={{ title: 'Salida' }} />
      <Stack.Screen
        name="SalidaScreenForm"
        component={SalidaScreenForm}
        options={({ navigation }) => ({
          title: 'Registrar Salida',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
              <Icon name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="EntradaScreen" component={EntradaScreen} options={{ title: 'Entrada' }} />
      <Stack.Screen
        name="EntradaScreenForm"
        component={EntradaScreenForm}
        options={({ navigation }) => ({
          title: 'Registrar Entrada',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
              <Icon name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="ControlLlantas" component={ControlLlantasScreen} options={{ title: 'Control de Llantas' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="MainStack" component={MainStack} options={{ headerShown: false }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 10,
  },
  drawerContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'top',
    backgroundColor: '#E02726',
  },
  drawerHeader: {
    alignItems: 'left',
    marginBottom: 20,
    marginTop: 60,
  },
  drawerText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  drawerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  drawerIcon: {
    marginRight: 10,
  },
  drawerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
