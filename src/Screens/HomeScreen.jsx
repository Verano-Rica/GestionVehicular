import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={styles.headerContainer}>
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeText1}>Bienvenido, {user.R_nombre}</Text>
        </View>
        <View style={styles.welcomeBox2}>
          <Icon name="user" size={20} color="black" style={styles.icon} />
          <Text style={styles.welcomeText2}>{user.R_posicion}</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.text}>Salidas Recientes</Text>

        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
          {registrosRecientes.map((registro, index) => (
            <View key={index} style={styles.infoBox}>

              <View style={styles.row}>
                <Text style={styles.label}>Fecha: </Text>
                <Text style={styles.cardText}>{registro.fecha}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>No. Economíco: </Text>
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

            </View>
          ))}
        </ScrollView>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: 'center',
    padding: 16,
  },
  welcomeBox: {
    backgroundColor: '#E02726',
    width: '99%',
    height: 145,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    position: 'relative',
    zIndex: 0, // Asegura que este elemento esté por encima de otros elementos con zIndex menor
  },
  welcomeBox2: {
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
  icon: {
    marginRight: 10,
    color: '#E02726',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    padding: 16,
  },
  welcomeText1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  welcomeText2: {
    fontSize: 20,
    fontWeight: 'LIGHT',
    color: 'black',
    textAlign: 'center',
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