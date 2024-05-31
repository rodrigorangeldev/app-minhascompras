import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
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