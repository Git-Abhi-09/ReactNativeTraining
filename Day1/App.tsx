import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
      
      <Text>Hii , I am Abhishek Somavanshi</Text>
      <Text>Build First React Native App</Text>
      </View>
    </SafeAreaView>
  )
}


export default App

const styles = StyleSheet.create({
  container:{
    display :'flex',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop:200
  },
  box:{
    height:200,
    width:400,
    borderRadius :15,
    borderColor: 'black',
    borderWidth :2,
    display :'flex',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor :"#dadada"
  }
})