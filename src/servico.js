import api, {verifyErr} from './libs/axios';
import styles from './estilo/estilos';
import {storeData, getData} from './libs/arm';
import Enum from './libs/enum.js';
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

import {DataTable} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
import {ProgressBar, MD3Colors} from 'react-native-paper';
const optionsPerPage = [2, 3, 4];

var unidades = [];

// const a = new Armazem();
export default function LoginScreen(props) {
  let navigationOptions = {};

  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState([]);
  const [resultProducao, setResultProducao] = useState({});
  const [img, setImg] = useState('');

  const updatePage = async () => {
    let {data} = await api.get('/mobile/prestador/servico');
    console.log('data');
    console.log(data);
    verifyErr(data);
    if (data && !data.errors) {
      console.log(data);
      setResult(data);
      setImg(
        `data:${data[0]['prestador.tipofoto']};base64,${data[0]['prestador.foto']}`,
      );
      console.log('for');
      for (let i of data) {
        console.log(i);
      }
    } else {
      // etResult(data);
    }
  };

  useEffect(() => {
    updatePage();
  }, []);

  return (
    <DataTable>
      <View style={{padding: 20}}>
        <Avatar.Image
          size={100}
          source={{
            uri: img,
          }}
        />
      </View>
      <ScrollView>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
          <DataTable.Title numeric>Peças</DataTable.Title>
          <DataTable.Title numeric>Minutos</DataTable.Title>
          <DataTable.Title numeric>Finalizados</DataTable.Title>
        </DataTable.Header>
        {result.map((i, k) => (
          <DataTable.Row>
            <DataTable.Cell>Servico {i.idservico}</DataTable.Cell>
            <DataTable.Cell>
              {Enum.servico_status_arr[i.status].name}
            </DataTable.Cell>
            <DataTable.Cell numeric>{i.quantidade}</DataTable.Cell>
            <DataTable.Cell numeric>{i.totalminutos}</DataTable.Cell>
            <DataTable.Cell numeric>{i.totalminutosfinalizado}</DataTable.Cell>
          </DataTable.Row>
        ))}
        <Text
          style={{
            fontSize: 10,
            padding: 15,
            color: 'black',
            textAlign: 'center',
            display: 'flex',
          }}>
          Count: {result.length}
        </Text>
      </ScrollView>
    </DataTable>
  );
}
