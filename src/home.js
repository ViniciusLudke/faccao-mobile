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
  ScrollView,
} from 'react-native';
// import {Login, verificaLogin} from './libs/axios.js';
import {
  AreaChart,
  Grid,
  LineChart,
  ProgressCircle,
} from 'react-native-svg-charts';

import * as shape from 'd3-shape';

var unidades = [];

// const a = new Armazem();
export default function LoginScreen(props) {
  let navigationOptions = {};

  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState([]);
  const [resultProducao, setResultProducao] = useState({});

  const updatePage = async () => {
    let {data} = await api.get('/mobile/prestador/home');
    verifyErr(data);
    if (data && !data.errors) {
      console.log(data.producaodia);
      setResult(data.producaodia);
    } else {
      // etResult(data);
    }
    let dataP = await api.get('/mobile/prestador/dataproducao');
    dataP = dataP.data;
    // verifyErr(dataP);
    if (dataP && !dataP.errors) {
      setResultProducao(dataP);
    } else {
      // etResult(data);
    }
  };

  useEffect(() => {
    updatePage();
  }, []);

  return (
    <ScrollView>
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
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
            display: 'flex',
          }}>
          Produção
        </Text>
        <View style={StyleSheet.container}>
          {result.length > 0 && (
            <AreaChart
              style={{height: 200}}
              data={result}
              contentInset={{top: 30, bottom: 30}}
              curve={shape.curveNatural}
              svg={{fill: 'rgba(134, 65, 244, 0.8)'}}>
              <Grid />
            </AreaChart>
          )}
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              textAlign: 'center',
              display: 'flex',
            }}>
            Progresso
          </Text>
          <ProgressCircle
            style={{height: 200, margin: 25}}
            progress={
              ((resultProducao.totalminutos /
                resultProducao.totalminutosfinalizado) *
                1) /
              100
            }
            progressColor={'rgb(134, 65, 244)'}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
