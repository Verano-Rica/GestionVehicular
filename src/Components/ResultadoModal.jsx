import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ResultadoModal = ({ visible, tipo, onClose }) => {
    const titulo = tipo === "entrada" ? "Entrada" : "Salida";
    const mensaje = `Gracias por registrar su ${tipo}`;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
        >
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.titulo}>{titulo}</Text>
                    <Text style={styles.mensaje}>{mensaje}</Text>
                    <Text style={styles.dato}>Calificación: 100</Text>
                    <Text style={styles.dato}>Folio: 1142371</Text>

                    <TouchableOpacity style={styles.boton} onPress={onClose}>
                        <Text style={styles.botonTexto}>Aceptar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>

    );
};

export default ResultadoModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        width: '80%',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'black', // para asegurar contraste
    },
    mensaje: {
        fontSize: 16,
        marginBottom: 10,
        color: 'black', // para asegurar contraste
    },
    dato: {
        fontSize: 16,
        color: 'black', // para asegurar contraste
        marginBottom: 10,
    },
    boton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
    },
    botonTexto: {
        color: 'white',
        fontSize: 16,
    },
});