import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import QR from '../../assets/favicon.png'

export default function ValijaDigitalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca Valija</Text>
      <View style={styles.subcontainer}>
        <Text style={styles.instruccion}>Ingresa el folio.</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de nómina"
          keyboardType="numeric"
        />
        <TouchableOpacity style={{ top:'-10%',left: '55%'}}>
          <Icon name="search" size={35} color="#900" />
        </TouchableOpacity>

        <TouchableOpacity>

        </TouchableOpacity>
        <Text style={styles.instruccion}>Escanea el QR</Text>
        <Image style={styles.image} source={require('../../assets/QR-Valija.png')} />

      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{
          color: '#fff',
          fontSize: 20,
          fontFamily: 'sans-serif-medium'
        }}>Escanear</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff'
  },
  subcontainer: {
    flex: 1,
    width: 380,
    paddingLeft: 15,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // textAlign: 'center',
    position: 'relative',
    top: 0,
    paddingBottom: 10
  },
  instruccion: {
    fontSize: 18,
    textAlign: 'left',
    paddingBottom: 15
  },
  input: {
    width: '50%',
    height: '8%',
    paddingLeft: 15,
    fontSize: 15,
    color: '#000',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 16,
    borderColor: "red",
  },
  image: {
    width: '70%',
    height: '50%',
    left: '10%',
    top: '10%'
  },
  button: {
    backgroundColor: '#E02726',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    marginBottom: 80,

  }
});