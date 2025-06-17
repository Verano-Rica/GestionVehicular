import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useUser } from '../contexts/UserContext';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  const { user } = useUser();

  return (
    <View style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerText}>Hola,</Text>
        <Text style={styles.drawerText}>{user?.R_nombre}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ControlLlantas')}
        style={styles.drawerButton}
      >
        <Icon
          name="car-outline"
          size={20}
          color="white"
          style={styles.drawerIcon}
        />
        <Text style={styles.drawerButtonText}>Control de Llantas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ValijaDigital')}
        style={styles.drawerButton}
      >
        <Icon
          name="document-outline"
          size={20}
          color="white"
          style={styles.drawerIcon}
        />
        <Text style={styles.drawerButtonText}>Valija Digital</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.drawerButton}
      >
        <Icon
          name="log-out-outline"
          size={20}
          color="white"
          style={styles.drawerIcon}
        />
        <Text style={styles.drawerButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="MainStack"
        component={StackNavigation}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E02726',
  },
  drawerHeader: {
    marginTop: 60,
    marginBottom: 20,
  },
  drawerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
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
