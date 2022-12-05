/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import LoginScreen from './src/login';
import Home from './src/home';
import Logout from './src/logout';
import Servico from './src/servico';
// import ConfigScreen from './src/config';
// import InfoScreen from './src/infos';

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  const [logado, setLogado] = useState(false);

  // useEffect(() => {
  //   alert('logado: ' + logado);
  // }, [logado]);
  return (
    <NavigationContainer>
      {logado === false && (
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen
            name="Login"
            component={() => <LoginScreen setLogado={setLogado} />}
          />
        </Drawer.Navigator>
      )}
      {logado && (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Servico" component={Servico} />
          <Drawer.Screen name="Logout" component={() => setLogado(false)} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
