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

  const handleNext = async () => {
    const fakeinfo= {
           R_economico : 3242,
           R_descripcion: 'lol',
           R_placa:  '3AS3',
           R_tipo : 'Rapido'
    }
    navigation.navigate('SalidaScreenForm',{tabla_economico: fakeinfo, user});
    // try {
    //   const response = await axios.post('http://201.147.141.185:81/consumos/apps/WS_GV_SAP_NOM_ECO.php', {
    //     economico: numeroEconomico
    //   });

    //   const { tabla_economico } = response.data;

    //   if (tabla_economico) {
    //     navigation.navigate('SalidaScreenForm', { tabla_economico, user });
    //   } else {
    //     Alert.alert('Error', 'Número económico no válido.');
    //   }
    // } catch (error) {
    //   Alert.alert('Error', 'Hubo un problema con la solicitud. Por favor, inténtelo de nuevo.');
    //   console.error(error);
    // }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salida</Text>
      {/* <Text style={styles.subtitle}>Número de nómina: {nomina}</Text> */}
      <Text style={styles.subtitle}>Ingresa tu número económico</Text>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder="Número económico"
        keyboardType="numeric"
        value={numeroEconomico}
        onChangeText={setNumeroEconomico}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
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
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});