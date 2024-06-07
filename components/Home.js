
import { StyleSheet, View } from 'react-native'
import { FAB } from 'react-native-paper';

import { useState } from 'react'

import Camera, {CameraModal} from './Camera'

export default function Home({ navigation }){

    const [isCamera, setIsCamera] = useState(false)

    const handleCamera = () => {
        setIsCamera(!isCamera)
        
    }

    return (
        
        <FAB
            icon="camera"
            style={styles.fab}
            onPress={() => navigation.navigate("Camera")}
        />
            // <CameraModal />
        
        
        
    //   <Surface style={styles.surface} elevation={4}>
    //     <IconButton
    //       icon={!isCamera ? "camera" : "close-box"}
    //       iconColor={"#000"}
    //       size={60}
    //       mode="contained"
    //       onPress={handleCamera}
    //     />
    //     <Text>Scanear QR Code</Text>
    //     <View style={{ width: 300, height: 300 }}>
    //       {isCamera ? <Camera /> : <></>}
    //     </View>
    //   </Surface>
    );
}

const styles = StyleSheet.create({
    surface: {
        //flex: 1,
        //padding: 8,
        margin: 'auto',
        height: '95%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCC'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})

