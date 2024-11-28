import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Picker } from 'react-native-ui-lib';

export default function ShareScreen() {
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const generateJSON = (platform: string) => {
    // Placeholder data generation
    const dummyData = {
      platform,
      timestamp: new Date().toISOString(),
      steps: 10000,
      calories: 2500,
      // ... other health data
    };
    return JSON.stringify(dummyData, null, 2);
  };

  const downloadJSON = async () => {
    if (!selectedPlatform) {
      Alert.alert('Error', 'Please select a platform.');
      return;
    }

    const jsonData = generateJSON(selectedPlatform);

    try {
      Alert.alert('Success', `File saved`);
    } catch (error) {
      Alert.alert('Error', 'Failed to save file.');
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Share Your Health Data</Text>
        <View style={styles.form}>
          <Picker
              placeholder="Select platform"
              value={selectedPlatform}
              onChange={(value) => setSelectedPlatform(value)}
              style={styles.picker}
          >
            <Picker.Item value="Google Fit" label="Google Fit" />
            <Picker.Item value="Health Connect" label="Health Connect" />
          </Picker>
          <View style={styles.buttonContainer}>
            <Button
                title="Download JSON"
                onPress={downloadJSON}
                disabled={!selectedPlatform}
            />
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
  picker: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
