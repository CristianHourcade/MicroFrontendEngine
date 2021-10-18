import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movement from 'micro-front-movement-controller'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>I'm Engine Controller</Text>
      <Movement/>
      <Text>I'm Engine Controller</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2074fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
