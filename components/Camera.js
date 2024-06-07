import React, { useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

import { loadData } from './Scrap'

export default function Camera(){
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [scan, setScan] = useState(false);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
          <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>Precisamos da sua permissão para utilizar a câmera.</Text>
            <Button onPress={requestPermission} title="Permitir" />
          </View>
        );
    }

    const handleBarcodeScan = ({ type, data }) => {
        
        if(data.includes('nfe.sefaz')){
          console.log(data)
          alert(`Scanner realizado -> tipo: ${type} dados: ${data}`)

        const sc = async () => {
          const result = await loadData(data);
        }
        sc();

      }else {alert('Tipo de documento inválido.'); return false;}
        

        
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return(
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} onBarcodeScanned={handleBarcodeScan}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                    <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
      </View>
    ) 


}

import { Modal, Portal, Text as TX, Button as BT, PaperProvider, Paragraph } from 'react-native-paper';
export function CameraModal(){
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white'};

  return (
    <PaperProvider>
        <Portal>
          <Modal 
            visible={visible} 
            onDismiss={hideModal} 
            contentContainerStyle={styles.container} 
          >
            <Portal>
              <View style={styles.container}>
                  <Camera />
              </View>
            </Portal>
          </Modal>
            <BT style={{marginTop: 30}} onPress={showModal}>
              Show
            </BT>
          </Portal>
      </PaperProvider>
  )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      width: '90%',
      height: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      margin: 'auto'
      
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });