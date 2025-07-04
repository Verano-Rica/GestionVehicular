import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function SalidaScreen({ route, navigation }) {
  const user = route.params?.user || {};
  const nomina = user.R_nomina || 'N/A';
  const [isFocused, setIsFocused] = useState(false);
  const [numeroEconomico, setNumeroEconomico] = useState('');

  //Logs para verificar si envia los datos correctamente
  // console.log('SalidaScreen user:', user);

  // Funcion para pruebas sin conexion
  const handleNextF = async () => {
    const fakeinfo = {
      R_economico: 3242,
      R_descripcion: 'lol',
      R_placa: '3AS3',
      R_tipo: 'Rapido'
    }
    navigation.navigate('SalidaScreenForm', { tabla_economico: fakeinfo, user });
  };


  // Funcion real para eviar el numero economico al WebServicio
  const handleNext = async () => {

    try {
      const response = await axios.post('http://201.147.141.185:81/consumos/apps/WS_GV_SAP_NOM_ECO.php', {
        economico: numeroEconomico
      });

      const { tabla_economico } = response.data;

      if (tabla_economico) {
        //Si recibe una respuesta valida, navega a la siguiente pantalla
        navigation.navigate('SalidaScreenForm', { tabla_economico, user });
      } else {
        Alert.alert('Error', 'Número económico no válido.');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema con la solicitud. Por favor, inténtelo de nuevo.');
      console.error(error);
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salida</Text>

      {/* Texto guía para el usuario */}
      {/* <Text style={styles.subtitle}>Número de nómina: {nomina}</Text> */}
      <Text style={styles.subtitle}>Ingresa tu número económico</Text>

      {/* Input para capturar el número económico */}
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder="Número económico"
        keyboardType="numeric"
        value={numeroEconomico}
        onChangeText={setNumeroEconomico}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {/* Botón para enviar el número económico */}
      <TouchableOpacity style={styles.button} onPress={handleNextF}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  //Contenedor Principal de la pantalla
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  //Titulo Principal (Salida)
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  // Subtítulo para indicar (ingresar número económico)
  subtitle: {
    fontSize: 20,
    marginBottom: 16,
    margin: 20,
    fontWeight: '300',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  // Campo de entrada para número económico
  input: {
    width: '90%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: '#FBFBFB',
  },
  // Estilo aplicado cuando el input está enfocado (borde rojo)
  inputFocused: {
    borderColor: 'red',
  },
  // Botón para continuar (Ingresar)
  button: {
    backgroundColor: '#E02726',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});