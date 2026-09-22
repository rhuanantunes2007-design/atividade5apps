import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Card({ titulo, corFundo = '#f0f0f0' }) {
  return (
    <View style={[styles.card, { backgroundColor: corFundo }]}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Card;