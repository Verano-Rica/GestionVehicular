  import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import icon1 from '../../assets/1.png';
import icon2 from '../../assets/2.png';
import icon3 from '../../assets/3.png';
import icon4 from '../../assets/4.png';
import icon5 from '../../assets/5.png';
import icon6 from '../../assets/6.png';

export default function EntradaScreenForm({ route, navigation }) {
  const { tabla_economico, user } = route.params;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("option1");
  const [items, setItems] = useState([
    { label: 'Opción 1', value: 'option1' },
    { label: 'Opción 2', value: 'option2' },
    { label: 'Opción 3', value: 'option3' },
  ]);

  const [checkboxes, setCheckboxes] = useState(Array(6).fill(false));
  const boxTexts = [
    'Placa Frontal', 'Placa Trasera', 'Licencia Conducir', 'Tarjeta circulación', 'Poliza Seguro', 'Comprobante Verificación'
  ];

  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

  const handleCheckboxToggle = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  const handleSubmit = () => {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Datos del usuario</Text>
        <View style={styles.infoBox}>
          <Text style={styles.textInfo}>Nombre: {user.R_nombre}</Text>
          <Text style={styles.textInfo}>Posición: {user.R_posicion}</Text>
          <Text style={styles.textInfo}>Número de Nómina: {user.R_nomina}</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Datos de la unidad</Text>
        <View style={styles.infoBox}>
          <Text style={styles.textInfo}>Número Económico: {tabla_economico.R_economico}</Text>
          <Text style={styles.textInfo}>Descripción: {tabla_economico.R_descripcion}</Text>
          <Text style={styles.textInfo}>Placa: {tabla_economico.R_placa}</Text>
          <Text style={styles.textInfo}>Tipo: {tabla_economico.R_tipo}</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Datos de la entrada</Text>
        <Text style={styles.subsubtitle}>Destino</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.pickerContainer}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subsubtitle}>Documentación</Text>
        {[0, 1, 2].map((row) => (
          <View style={styles.row} key={row}>
            {[0, 1].map((col) => {
              const index = row * 2 + col;
              return (
                <TouchableOpacity
                  style={styles.squareBox}
                  key={col}
                  onPress={() => handleCheckboxToggle(index)}
                >
                <Image source={icons[index]} style={styles.icon} />
                  <Text style={styles.textSquare}>{boxTexts[index]}</Text>
                  <View
                    style={[
                      styles.checkbox,
                      checkboxes[index] && styles.checkboxSelected,
                    ]}
                  >
                    {checkboxes[index] && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  sectionContainer: {
    width: '100%',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '300',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontWeight: 'bold',
  },
  subsubtitle: {
    fontSize: 15,
    marginBottom: 17,
    fontWeight: '300',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontWeight: 'semibold',
  },
  infoBox: {
    width: '100%',
    paddingStart: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
    backgroundColor: '#FFFFFF',
  },
  textInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  squareBox: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  icon: {
    width: 110,
    height: 110,
    marginBottom: 10,
  },
  textSquare: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  checkbox: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E02726',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#E02726',
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#E02726',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});