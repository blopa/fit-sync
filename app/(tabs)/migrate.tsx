import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-ui-lib';

export default function MigrateScreen() {
  const [progress, setProgress] = useState(0);

  const startMigration = () => {
    // Simulating migration process
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prevProgress + 10;
      });
    }, 500);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Migrate Your Health Data</Text>
        <View style={styles.migrationRow}>
          <Text style={styles.migrationText}>Google Fit</Text>
          <Ionicons name="arrow-forward" size={24} color="black" style={styles.arrowIcon} />
          <Text style={styles.migrationText}>Health Connect</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Start Migration" onPress={startMigration} />
        </View>
        <ProgressBar
            progress={progress}
            style={styles.progressBar}
        />
        <Text style={styles.progressText}>{progress}% Complete</Text>
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
  migrationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  migrationText: {
    fontSize: 16,
    fontWeight: '600',
  },
  arrowIcon: {
    marginHorizontal: 8,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  progressBar: {
    width: '80%',
    height: 10,
    marginBottom: 8,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
});
