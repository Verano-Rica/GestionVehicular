import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ValijaDigitalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Valija Digital</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
  },
});