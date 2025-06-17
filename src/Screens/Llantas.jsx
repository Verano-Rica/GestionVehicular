import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ControlLlantasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Control de Llantas</Text>
              <View style={styles.welcomeBox2}>
                <Text style={styles.welcomeText1}>Bienvenido</Text>
              </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
    welcomeBox2: {//
    backgroundColor: '#FFFFFF',
    width: '88%',
    height: 100,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
    position: 'absolute',
    top: 100, // Ajusta este valor según sea necesario
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 1, // Asegura que este elemento esté por debajo de welcomeBox
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
    welcomeText1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
  },
});