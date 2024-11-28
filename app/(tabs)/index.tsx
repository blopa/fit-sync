import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import {useNavigation} from "expo-router";
import {NavigationProp} from "@react-navigation/native";

export default function TabOneScreen() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Health Data Migration</Text>
        <Text style={styles.subtitle}>
          Easily transfer your data from Google Fit to Android Health Connect
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('migrate')}>
          <Text style={styles.buttonText}>Start Migration</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#6b6b6b',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
