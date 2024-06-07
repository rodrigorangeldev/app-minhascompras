import React, {useState} from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from "./Home";
import Camera from "./Camera";
import ComprasRoute from "./ComprasRoute";


const BottomNav = ({ navigation }) =>   {

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      //unfocusedIcon: "home",
    },
    { key: "compras", title: "Compras", focusedIcon: "album" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    compras: ComprasRoute,
  });
      return( <SafeAreaProvider>
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
      </SafeAreaProvider>
      )
              
}

const Index = () => {
  
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name='Index' component={BottomNav}  />
        <Stack.Screen name='Home' component={Home}  />
        <Stack.Screen name='Camera' component={Camera}  />
    </Stack.Navigator>
  </NavigationContainer>  
  );
};

export default Index;
