import React, { useState } from 'react';
import { SafeAreaView, Alert, StyleSheet } from 'react-native';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!name || !email) {
      Alert.alert('Please fill all fields');
      return;
    }
    Alert.alert('Submitted', `Name: ${name}\nEmail: ${email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <CustomInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <CustomButton title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
