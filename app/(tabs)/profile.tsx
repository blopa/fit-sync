import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function ProfileScreen() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Profile</Text>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Your name" />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Your email" keyboardType="email-address" />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Google Fit Account</Text>
            <TextInput style={styles.input} placeholder="Your Google Fit account" />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Health Connect Account</Text>
            <TextInput style={styles.input} placeholder="Your Health Connect account" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Save Changes" onPress={() => {}} />
          </View>
        </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 16,
  },
});
