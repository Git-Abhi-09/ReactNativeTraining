import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setHasStarted(true);
    setIsRunning(true);
  };

  const handlePauseResume = () => {
    setIsRunning(prev => !prev);
  };

  const handleRestart = () => {
    setSeconds(0);
    setIsRunning(false);
    setHasStarted(false);
  };

  const textColor = { color: isDarkMode ? '#fff' : '#000' };
  const bgColor = { backgroundColor: isDarkMode ? '#000' : '#f3f4f6' };

  return (
    <View style={[styles.container, bgColor]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Text style={[styles.title, textColor]}>⏱️ Timer App</Text>
      <Text style={[styles.timer, textColor]}>{seconds}s</Text>

      <View style={styles.buttonRow}>
        {!hasStarted ? (
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handlePauseResume}>
            
            <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Resume'}</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={[styles.button, styles.restart]} onPress={handleRestart}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b82f6',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  restart: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
