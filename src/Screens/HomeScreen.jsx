import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen({ navigation, user }) {

  const registrosRecientes = [
    {
      fecha: '2025-06-19',
      numEconomico: '7347',
      nombre: 'Jesus Carbajal',
      numNomina: 'NP123',
      placa: 'ABC-123',
      status: 'Activo',
    },
    {
      fecha: '2025-06-18',
      numEconomico: '9867',
      nombre: 'Jesus Carbajal',
      numNomina: 'NP456',
      placa: 'ABC-456',
      status: 'Finalizado',
    },
    {
      fecha: '2025-06-17',
      numEconomico: '9867',
      nombre: 'Jesus Carbajal',
      numNomina: 'NP456',
      placa: 'ABC-456',
      status: 'Finalizado',
    },
    {
      fecha: '2025-06-16',
      numEconomico: '9867',
      nombre: 'Jesus Carbajal',
      numNomina: 'NP456',
      placa: 'ABC-456',
      status: 'Finalizado',
    },
    {
      fecha: '2025-06-15',
      numEconomico: '9867',
      nombre: 'Jesus Carbajal',
      numNomina: 'NP456',
      placa: 'ABC-456',
      status: 'Finalizado',
    },
    {
      fecha: '2025-06-15',
      numEconomico: '9867',
      nombre: 'Jesus Carbajal',
      numNomina: 'NP456',
      placa: 'ABC-456',
      status: 'Finalizado',
    },

  ];
  return (
    <View style={styles.container}>
      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeText1}>Bienvenido, {user.R_nombre}</Text>
      </View>
      <View style={styles.welcomeBox2}>
        <Icon  name="user" size={20} color="black" style={styles.icon} />
        <Text style={styles.welcomeText2}>Especialidad en {user.R_posicion}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.text}>Salidas Recientes</Text>

        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
          {registrosRecientes.map((registro, index) => {
            const Contenedor = registro.status === 'Activo' ? TouchableOpacity : View;

            return (
              <Contenedor
                key={index}
                style={registro.status === 'Activo' ? styles.infoBoxActivo : styles.infoBox}
                onPress={
                  registro.status === 'Activo'
                    ? () => navigation.navigate('EntradaScreenForm')
                    : null
                }
                activeOpacity={0.8}
              >
                <View style={styles.row}>
                  <Text style={styles.label}>Fecha: </Text>
                  <Text style={styles.cardText}>{registro.fecha}</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.label}>No. Económico: </Text>
                  <Text style={styles.cardText}>{registro.numEconomico}</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.label}>Nombre: </Text>
                  <Text style={styles.cardText}>{registro.nombre}</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.label}>No. Nómina: </Text>
                  <Text style={styles.cardText}>{registro.numNomina}</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.label}>Placa: </Text>
                  <Text style={styles.cardText}>{registro.placa}</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.label}>Status: </Text>
                  <Text
                    style={
                      registro.status === 'Activo' ? styles.estatusActivo : styles.estatusFinalizado
                    }
                  >
                    {registro.status}
                  </Text>
                </View>
              </Contenedor>
            );
          })}
        </ScrollView>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center'
  },
  headerContainer: {
    alignItems: 'center',
    padding: 16,
  },
  welcomeBox: {
    backgroundColor: '#E02726',
    width: '90%',
    height: '18%',
    borderRadius: 15,
    top: '3%',
    alignItems: 'center',
    alignSelf: 'center', // Solo este elemento se centra horizontalmente
  },
  welcomeBox2: {
    backgroundColor: '#FFF',
    shadowColor: '#AAFFA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
    width: '80%',
    height: '10%',
    bottom: '4%',
    borderRadius: 15,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Solo este elemento se centra horizontalmente
  },
  icon: {
    marginRight: 10,
    color: '#E02726',
    // paddingBottom: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    padding: 16,
  },
  welcomeText1: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    top: '15%',
    textAlign: 'center',
  },
  welcomeText2: {
    fontSize: 15,
    color: '#000',
  flexShrink: 1, // ✅ permite que el texto se ajuste sin romper layout
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  buttonAutorizar: {
    backgroundColor: 'green',
  },
  buttonDenegar: {
    backgroundColor: '#E02726',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  infoBox: {
    width: '95%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  infoBoxActivo: {
    width: '95%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    backgroundColor: '#FFFFFF', // rojo muy claro
    borderColor: '#07d400',     // rojo más fuerte
    borderWidth: 1.5,
    alignSelf: 'center',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 0,
  },
  label: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  estatusActivo: {
    fontWeight: 'bold',
    color: '#07d400',
  },
  estatusFinalizado: {
    fontWeight: 'bold',
    color: '#E02726',
  },
});