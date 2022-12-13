import api, {verifyErr} from './libs/axios';
import styles from './estilo/estilos';
import {storeData, getData} from './libs/arm';

import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
// import {Login, verificaLogin} from './libs/axios.js';

var unidades = [];

// const a = new Armazem();
export default function LoginScreen(props) {
  let navigationOptions = {};

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState({});

  const verify = async () => {
    let token = Cookies.get('token');
    if (token) {
      let res = await verificaLogin();
      if (res.token === token) {
        setObserver(!observer);
        // history.replace('/home');
      }
    }
  };

  const verifica = async () => {
    // let {data} = await api.get('/mobile/prestador/verifica');
    // verifyErr(data);
    // if (data && !data.errors) {
    //   props.setLogado(true);
    // } else {
    //   props.setLogado(false);
    // }
  };

  useEffect(() => {
    if (getData('token')) {
      verifica();
    }
  }, []);

  const handleSubmit = async e => {
    // e.preventDefault();
    setDisabled(true);

    let {data} = await api.post('/mobile/prestador/login', {
      email,
      senha,
    });

    verifyErr(data);
    if (data && !data.errors) {
      await storeData('token', data.token);
      props.setLogado(true);
      navigation.navigate('Login');
    } else {
      alert('err!!!');
    }
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     pass: '',
  //     error: '',
  //     token: '',
  //     empresa_id: '',
  //   };
  // }
  handleEmailChange = email => {
    setEmail(email);
  };

  handlePassChange = senha => {
    setSenha(senha);
  };

  return (
    <KeyboardAvoidingView style={StyleSheet.background}>
      <View style={styles.head}>
        <Image
          style={{
            width: 200,
            height: 250,
            resizeMode: 'contain',
          }}
          source={require('./fotos/logordl.png')}
        />
      </View>
      <View style={StyleSheet.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          value={email}
          onChangeText={handleEmailChange}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          autoCorrect={false}
          value={senha}
          onChangeText={handlePassChange}
        />

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={e => handleSubmit()}>
          <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
