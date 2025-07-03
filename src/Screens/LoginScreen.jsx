// Grupo Rica
//Verano Rica 2025
//
//
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import axios from 'axios';
import { useUser } from '../contexts/UserContext.jsx'; // Importa el contexto


export default function LoginScreen({ navigation }) {
  const [nomina, setNomina] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { setUser } = useUser(); // Usa el contexto para establecer los datos del usuario

  const handleLoginF = async () => {//Método para las pruebas sin WebService del Login
    if (nomina.trim() === '') {
      Alert.alert('Error', 'Por favor ingrese su número de nómina.');
      return;
    } else {
      const Fakeuser = {//Datos de simulación de usuario
        R_status: 'activo',
        R_nomina: 2345,
        R_nombre: "Jesus Alfonso Navarro Carbajal",
        R_posicion: 'Desarrollo de Software.'
      };
      navigation.navigate('MainTabs', { user: Fakeuser });
    }
  };

  const handleLogin = async () => {//Método funcional del Login
    try {
      const response = await axios.post('http://201.147.141.185:81/consumos/apps/WS_GV_SAP_NOM_ECO.php', {
        nomina: nomina
      });

      const { tabla_nomina } = response.data;

      if (tabla_nomina && tabla_nomina.R_status === 'ACTIVO') {
        setUser(tabla_nomina); // Establece los datos del usuario en el contexto
        navigation.navigate('MainTabs', { user: tabla_nomina });
      } else {
        Alert.alert('Error', 'Número de nómina no válido o usuario inactivo.');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema con la solicitud. Por favor, inténtelo de nuevo.');
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inner}>
          <Image source={require('../../assets/logo.jpg')} style={{ width: 200, height: 200, marginBottom: 15 }} />
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Ingresa tu nómina</Text>
          <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            placeholder="Número de nómina"
            keyboardType="numeric"
            value={nomina}
            onChangeText={setNomina}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {//Contenedor principal
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  inner: {//Subcontenedor del formulario
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 16,
    margin: 20,
    fontWeight: '300',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  input: {
    width: '90%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: '#FBFBFB',
  },
  inputFocused: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: '#E02726',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    marginBottom: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {//CHECAR EN LA VISUALIZACION***
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  forgetnomina: {
    fontSize: 14,
    marginRight: 5,
    fontWeight: '300',
    textAlign: 'center',
  },
  searchnomina: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    color: 'red',
  },
});