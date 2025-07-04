import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Modal, View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Signature from 'react-native-signature-canvas';
import { useRef } from 'react';


export default function ControlLlantasScreen() {   //-------------|
  const [modalVisible, setModalVisible] = useState(false);   //   |
  const [fecha, setFecha] = useState('');                     //  |------> User inputs for the modal
  const [prioridad, setPrioridad] = useState('Alta');       //    |
  const [descripcion, setDescripcion] = useState('');//-----------|


  // User inputs for tire modal
  const [llantaModalVisible, setLlantaModalVisible] = useState(false);
  const [numeroLlantaInput, setNumeroLlantaInput] = useState('');
  const [desgaste, setDesgaste] = useState('');
  const [tipoPiso, setTipoPiso] = useState('O'); // 'O' o 'U'
  const [medidaLlanta, setMedidaLlanta] = useState('');
  const [comentario, setComentario] = useState('');
  const [llantaSeleccionada, setLlantaSeleccionada] = useState({    //Mas adelante llenar los campos con una consulta a la API, pero por ahora estan Hardcodeados
    posicion: '',
    noLlanta: '',
    marca: '',
  });


  // Modal para firma
  const [firmaModalVisible, setFirmaModalVisible] = useState(false);
  const [firmaData, setFirmaData] = useState(null);
  const signatureRef = useRef(null);

  return (

    <SafeAreaView style={{ flex: 1 }}>

      {/* Contenedor Principal */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Datos de la unidad</Text>


        {/* Información de la unidad */}
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



          {/* Boton con Modal para "Programar Revicion" */}
          <View style={styles.row}>
            <Text style={styles.label}>Próximna Revisión:</Text>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>PROGRAMAR</Text>
            </TouchableOpacity>
          </View>

        </View>



        {/* Llantas con imagenes clickeables para mostrar tireModal */}
        <View style={styles.tireContainer}>
          <View style={styles.tireRow}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setLlantaSeleccionada({
                  posicion: '1',
                  noLlanta: '140893',
                  marca: 'GOODYEAR',
                });
                setLlantaModalVisible(true);
              }}
            >
              <Image source={require('../../assets/tire.png')} style={styles.tire} />
            </TouchableOpacity>
            
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setLlantaSeleccionada({
                  posicion: '2',
                  noLlanta: '140893',
                  marca: 'GOODYEAR',
                });
                setLlantaModalVisible(true);
              }}
            >
              <Image source={require('../../assets/tire.png')} style={styles.tire} />
            </TouchableOpacity>
          </View>

          {/* Imagen represantativa del vehciulo (Debe variar para los distintos vehiculos) */}
          <Image source={require('../../assets/car_top.png')} style={styles.car} />


          {/* Llanta con imagene clickeable para mostrar tireModal */}
          <View style={styles.tireRow}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setLlantaSeleccionada({
                  posicion: '3',
                  noLlanta: '140893',
                  marca: 'GOODYEAR',
                });
                setLlantaModalVisible(true);
              }}
            >
              <Image source={require('../../assets/tire.png')} style={styles.tire} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setLlantaSeleccionada({
                  posicion: '4',
                  noLlanta: '140893',
                  marca: 'GOODYEAR',
                });
                setLlantaModalVisible(true);
              }}
            >
              <Image source={require('../../assets/tire.png')} style={styles.tire} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Boton con funcion para mostrar le modal tipo canvas para la firma diital*/}
        <TouchableOpacity style={[styles.button, styles.firmaButton]} onPress={() => setFirmaModalVisible(true)}>
          <Text style={styles.buttonText}>FIRMA</Text>
        </TouchableOpacity>




        {/* Modal para programas revicion con formulario */}
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

                <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#999' }]} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Cerrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.modalButton} onPress={() => {
                  // Aquí podrías guardar la info
                  console.log({ fecha, prioridad, descripcion });
                  setModalVisible(false);
                }}>
                  <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity>

              </View>

            </View>

          </View>
        </Modal>


        {/* Modal Para mostrar y complementar los datos de cada llanta*/}
        {/* El modal es dinamico se usa para todos los neumaticos con diferentes parametros*/}
        <Modal
          visible={llantaModalVisible}
          animationType='slide'
          transparent
          onRequestClose={() => setLlantaModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Posición: {llantaSeleccionada.posicion}</Text>


              <View style={styles.row}>
                <Text style={styles.label}>No. Llanta:</Text>
                <Text style={styles.value}>{llantaSeleccionada.noLlanta}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Marca:</Text>
                <Text style={styles.value}>{llantaSeleccionada.marca}</Text>
              </View>






              <Text style={styles.modalLabel}>No. Llanta:</Text>
              <TextInput
                style={styles.modalInput}
                keyboardType="numeric"
                value={numeroLlantaInput}
                onChangeText={setNumeroLlantaInput}
              />

              <Text style={styles.modalLabel}>Desgaste:</Text>
              <TextInput
                style={styles.modalInput}
                keyboardType="numeric"
                value={desgaste}
                onChangeText={setDesgaste}
              />

              <Text style={styles.modalLabel}>Tipo de Piso:</Text>
              <View style={styles.radioGroup}>
                {['O', 'U'].map(tipo => (
                  <TouchableOpacity key={tipo} style={styles.radioOption} onPress={() => setTipoPiso(tipo)}>
                    <View style={[styles.radioCircle, tipoPiso === tipo && styles.radioSelected]} />
                    <Text>{tipo}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.modalLabel}>Medida de Llanta:</Text>
              <TextInput
                style={styles.modalInput}
                value={medidaLlanta}
                onChangeText={setMedidaLlanta}
              />

              <Text style={styles.modalLabel}>Comentario:</Text>
              <TextInput
                style={[styles.modalInput, { height: 60 }]}
                multiline
                value={comentario}
                onChangeText={setComentario}
              />

              <View style={styles.modalButtons}>

                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: '#999' }]}
                  onPress={() => setLlantaModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Cerrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    console.log({ numeroLlantaInput, desgaste, tipoPiso, medidaLlanta, comentario });
                    setLlantaModalVisible(false);
                  }}
                >
                  <Text style={styles.buttonText}>Evaluar</Text>
                </TouchableOpacity>

              </View>


            </View>
          </View>

        </Modal>

        {/* Modal para Firma Digital con el uso de una pantalla tipo canvas 
            que el usuario dibuje su firma y la guarde */}
        <Modal
          visible={firmaModalVisible}
          animationType='slide'
          transparent
          onRequestClose={() => setFirmaModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Firma Digital</Text>

              <View style={{ height: 300, borderWidth: 1, borderColor: '#ccc', marginVertical: 10 }}>
                <Signature
                  ref={signatureRef}
                  onOK={Signature => {
                    setFirmaData(Signature);
                    console.log('Firma capturada: ', Signature);
                  }}
                  onEmpty={() => console.log('Firma vacía')}
                  descriptionText="Firma aquí"
                  clearText="Limpiar"
                  confirmText="Confirmar"
                  webStyle={`.m-signature-pad--footer {display: none; margin: 0;}`}
                />
              </View>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#f0ad4e', marginTop: 10, alignSelf: 'center' }]}
                onPress={() => {
                  if (signatureRef.current) {
                    signatureRef.current.clearSignature();
                  }
                }}
              >
                <Text style={styles.buttonText}>Limpiar</Text>
              </TouchableOpacity>


              <View style={styles.modalButtons}>
                
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: '#999' }]}
                  onPress={() => setFirmaModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Cerrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    console.log('Firma guardada:', firmaData);
                    setFirmaModalVisible(false);
                  }}
                >
                  <Text style={styles.buttonText}>Guardar</Text>
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
  //Titulo Principal de la Pantalla
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -25,
  },
  // Contenedor con sombreado para mostrar los datos de la unidad
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
  // Etiqueta de información (izquierda en una fila)
  label: {
    fontWeight: 'bold',
    flex: 1,
  },
  // Estilo para filas de información (label + valor)
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  // Valor de información (derecha en una fila)
  value: {
    flex: 1,
    textAlign: 'right',
  },
  // Botón rojo reutilizable (por programar revisión o firmar)
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    
    
  },
  // Texto blanco dentro de los botones
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Contenedor general del diagrama de llantas y coche
  tireContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  // Fila para mostrar dos llantas (superior o inferior)
  tireRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginVertical: 0,
  },
  // Imagen individual de una llanta
  tire: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  // Imagen del automovil
  car: {
    width: 120,
    height: 200,
    resizeMode: 'contain',
    marginVertical: -45,
  },
  // Posiciona el botón de firma al centro con margen
  firmaButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  // Contenedor principal de toda la pantalla
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  // 
  // text: {
  //   fontSize: 24,
  // },

  // Fondo gris semitransparente que oscurece el fondo cuando un modal está abierto
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Contenido blanco del modal (cuadro central)
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '90%',
  },
  //Titul centrado en Modales
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  // Etiqueta de cada campo dentro del modal
  modalLabel: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  // Input de texto dentro de modales
  modalInput: {
    borderWidth: 1,
    borderColor: '#e60202',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  // Contenedor de botones tipo radio
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  // Cada opción del grupo de radio
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  // Círculo del botón tipo radio (no seleccionado)
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#555',
    marginRight: 5,
  },
  // Estilo aplicado al radio seleccionado (fondo rojo)
  radioSelected: {
    backgroundColor: 'red',
  },
  // Contenedor para los botones al final del modal
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  // Botón individual dentro del modal
  modalButton: {
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginHorizontal: 30,
  }
});