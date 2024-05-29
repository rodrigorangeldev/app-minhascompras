
import { StyleSheet, View } from 'react-native'
import { Surface, Text, IconButton, MD3Colors, Icon } from 'react-native-paper'

import { useState } from 'react'

import Camera from './Camera'

export default function Home(){

    const [isCamera, setIsCamera] = useState(false)

    const handleCamera = () => {
        setIsCamera(!isCamera)
        
    }

    return (
        <View> 
            <Surface style={styles.surface} elevation={4}>
                <IconButton 
                    icon={!isCamera ? 'camera' : 'close-box'} 
                    iconColor={'#000'} 
                    size={60} 
                    mode='contained'
                    onPress={handleCamera}
                />
                <Text>Scanear QR Code</Text>
                <View style={{width: 300, height: 300}}>
                    { isCamera ? <Camera /> : <></>}
                </View>
            </Surface>
            
        </View>
    )
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
    }
})

