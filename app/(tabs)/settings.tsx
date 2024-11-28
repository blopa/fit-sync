import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import { Picker } from 'react-native-ui-lib';

export default function SettingsScreen() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isDataSyncEnabled, setIsDataSyncEnabled] = useState(false);
  const [language, setLanguage] = useState('en');

  const saveSettings = () => {
    // Placeholder logic to save settings
    console.log({
      notifications: isNotificationsEnabled,
      darkMode: isDarkModeEnabled,
      dataSync: isDataSyncEnabled,
      language,
    });
    alert('Settings saved successfully!');
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.form}>
          <View style={styles.settingRow}>
            <Text style={styles.label}>Enable Notifications</Text>
            <Switch
                value={isNotificationsEnabled}
                onValueChange={setIsNotificationsEnabled}
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.label}>Dark Mode</Text>
            <Switch value={isDarkModeEnabled} onValueChange={setIsDarkModeEnabled} />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.label}>Auto-sync Data</Text>
            <Switch value={isDataSyncEnabled} onValueChange={setIsDataSyncEnabled} />
          </View>
          <View style={styles.languageSetting}>
            <Text style={styles.label}>Language</Text>
            <Picker
                placeholder="Select language"
                value={language}
                onChange={(value) => setLanguage(value as string)}
                style={styles.picker}
            >
              <Picker.Item value="en" label="English" />
              <Picker.Item value="es" label="Español" />
              <Picker.Item value="fr" label="Français" />
              <Picker.Item value="de" label="Deutsch" />
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Save Settings" onPress={saveSettings} />
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
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
  },
  languageSetting: {
    marginBottom: 16,
  },
  picker: {
    width: '100%',
  },
  buttonContainer: {
    marginTop: 16,
  },
});
