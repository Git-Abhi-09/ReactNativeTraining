import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native"


const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (<SafeAreaView style={styles.container}>
    <View style={styles.topBox}>
      <View style={styles.box}>
        <Text style={styles.countText}>
          Counter
        </Text>
        <Text style={styles.countNumber}>
          {count}
        </Text>
      </View>
      <View style={styles.buttonBox}>
        <Button title="Increment" onPress={handleIncrement}></Button>
        <Button title="Decrement" onPress={handleDecrement}></Button>
      </View>
    </View>
  </SafeAreaView>)
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dadada',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 300,
    borderWidth:2,
    borderRadius:10
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },
  countNumber: {
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'purple'
  },
  countText: {
    fontSize: 20,
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
  }
})