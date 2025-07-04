import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen({ navigation, user }) {
  const registrosRecientes = [//Datos simulados de entradas registradas y por solicitar autorización
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
  //Espacio para implementar el uso de WebService
  //++
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


        {/* Contenedor para Mostrar las card de registros recientes */}
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
          {registrosRecientes.map((registro, index) => {//Mapeo del arreglo de los datos simulados
            
            // Cnstruccion de la card de registro dependiendo si esta activo, se vuelve precionable (TouchableOpacity), si no, solo es un view 
            const Contenedor = registro.status === 'Activo' ? TouchableOpacity : View;
            return (
              <Contenedor  
                key={index}
                style={registro.status === 'Activo' ? styles.infoBoxActivo : styles.infoBox} 
                onPress={
                  registro.status === 'Activo'
                    ? () => navigation.navigate('EntradaScreenForm', {user})
                    : null
                }
                activeOpacity={0.8}
              >
                <View style={styles.row}>{/*Factorizar a un método que construya dinamicamente las cards*/}
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
                    style={      // Operador para asignar el estilo dependiendo del status 
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
  //Container principal de toda la pantalla
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',                  /* Revisar si se usa */
    padding: 16,
  },
  // Caja de bienvenida roja
  welcomeBox: { 
    backgroundColor: '#E02726',
    width: '90%',
    height: '18%',
    borderRadius: 15,
    top: '3%',
    alignItems: 'center',
    alignSelf: 'center', // Solo este elemento se centra horizontalmente
  },
  // Segunda caja blanca con sombra
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
  // Icono del usuario detro de la caja blanca
  icon: { 
    marginRight: 10,
    color: '#E02726',
    // paddingBottom: 10,
  },
  // Contenedor para el area del contenido principal (ScrollView)
  contentContainer: { 
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    padding: 16,
  },
  // Texto de Bienvenida (Nombre del usuario)
  welcomeText1: { 
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    top: '15%',
    textAlign: 'center',
  },
  // Texto de especialidad debajo del nombre
  welcomeText2: { 
    fontSize: 15,
    color: '#000',
  flexShrink: 1, //  permite que el texto se ajuste sin romper layout
  },
  // Titulo de la seccion (Salidas recientes)
  text: { 
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    paddingLeft: 10,
  },
  buttonContainer: {                             /* Revisar si se usa */
    flexDirection: 'row',
    justifyContent: 'space-between',            
    marginTop: 15,
  },
  button: {                                     /* Revisar si se usa */
    padding: 10,
    borderRadius: 5,                                   
    alignItems: 'center',
    width: '45%',
  },
  buttonAutorizar: {                            /* Revisar si se usa */
    backgroundColor: 'green',
  },
  buttonDenegar: {                              /* Revisar si se usa */
    backgroundColor: '#E02726',
  },
  buttonText: {                                 /* Revisar si se usa */
    color: 'white',
    fontSize: 16,
  },
  // Tarjeta Normal (registro finalizado)
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
  // Tarjeta especial para registros activos (clickeables)
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
  // Texto dentro de cada fila de informacion
  cardText: {
    fontSize: 16,
    marginBottom: 0,
  },
  // Etiqueta en negrita
  label: {
    fontWeight: 'bold',
  },
  // Fila de contenido (Label + Valor)
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  // Estilo para el texto de estado Activo
  estatusActivo: {
    fontWeight: 'bold',
    color: '#07d400',
  },
  // Estilo para el texto de estado Finalizado
  estatusFinalizado: {
    fontWeight: 'bold',
    color: '#E02726',
  },
});