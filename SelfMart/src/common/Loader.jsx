import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Loader = ({modalVisible , setModalVisible}) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={{flex:1 , justifyContent:'center' ,alignItems:'center'}}>
                <View style={styles.modalView}>
                    
                </View>
                <ActivityIndicator size={'large'}/>
            </View>
        </Modal>
    )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0
    },
    modalView: {
        width:100,
        height:100,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});