import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Modal, View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function ControlLlantasScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [fecha, setFecha] = useState('');
  const [prioridad, setPrioridad] = useState('Alta');
  const [descripcion, setDescripcion] = useState('');
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Datos de la unidad</Text>

        <View style={styles.infoBox}>
          <View style={styles.row}>
            <Text style={styles.label}>Tipo:</Text>
            <Text style={styles.value}>Compacto</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>No. Económico:</Text>
            <Text style={styles.value}>7347</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Placa:</Text>
            <Text style={styles.value}>HGK624D</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Kilometraje:</Text>
            <Text style={styles.value}>24567</Text>
          </View>



          <View style={styles.row}>
            <Text style={styles.label}>Próximna Revisión:</Text>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>PROGRAMAR</Text>
            </TouchableOpacity>
          </View>

        </View>


        <View style={styles.tireContainer}>
          <View style={styles.tireRow}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => Alert.alert('Llantas', 'Llanta delantera izquierda')}
            >
              <Image source={require('../../assets/tire.png')} style={styles.tire} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => Alert.alert('Llantas', 'Llanta delantera derecha')}
            >
              <Image source={require('../../assets/tire.png')} style={styles.tire} />
            </TouchableOpacity>
          </View>

          <Image source={require('../../assets/car_top.png')} style={styles.car} />

          <View style={styles.tireRow}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => Alert.alert('Llantas', 'Llanta trasera izquierda')}
            >
              <Image source={require('../../assets/tire.png')} style={styles.tire} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => Alert.alert('Llantas', 'Llanta trasera derecha')}
            >
              <Image source={require('../../assets/tire.png')} style={styles.tire} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={[styles.button, styles.firmaButton]}>
          <Text style={styles.buttonText}>FIRMA</Text>
        </TouchableOpacity>




        <Modal
          visible={modalVisible}
          animationType='slide'
          transparent
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Programar Revisión</Text>

              <Text style={styles.modalLabel}>Fecha:</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="DD/MM/AAAA"
                value={fecha}
                onChangeText={setFecha}
              />

              <Text style={styles.modalLabel}>Prioridad:</Text>
              <View style={styles.radioGroup}>
                {['Alta', 'Media', 'Baja'].map((nivel) => (
                  <TouchableOpacity key={nivel} style={styles.radioOption} onPress={() => setPrioridad(nivel)}>
                    <View style={[styles.radioCircle, prioridad === nivel && styles.radioSelected]} />
                    <Text>{nivel}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.modalLabel}>Descripción:</Text>
              <TextInput
                style={[styles.modalInput, { height: 60 }]}
                multiline
                placeholder='Detalles de la revisión'
                value={descripcion}
                onChangeText={setDescripcion}
              />

              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.button} onPress={() => {
                  // Aquí podrías guardar la info
                  console.log({ fecha, prioridad, descripcion });
                  setModalVisible(false);
                }}>
                  <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: '#999' }]} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </Modal>




      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -25,
  },
  infoBox: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    marginBottom: 20,
    elevation: 5, // Para Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  value: {
    flex: 1,
    textAlign: 'right',
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tireContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  tireRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginVertical: 0,
  },
  tire: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  car: {
    width: 120,
    height: 200,
    resizeMode: 'contain',
    marginVertical: -45,
  },
  firmaButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalLabel: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#555',
    marginRight: 5,
  },
  radioSelected: {
    backgroundColor: 'red',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

});