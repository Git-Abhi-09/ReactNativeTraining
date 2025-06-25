import React, { useState } from 'react';
import { SafeAreaView, View, Button, StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserList from './components/UserList';

const queryClient = new QueryClient();

const App = () => {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Get Users Data"
            color="#1976d2"
            onPress={() => setShowUsers(true)}
          />
        </View>
        {showUsers && <UserList fetchEnabled={true} />}
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
