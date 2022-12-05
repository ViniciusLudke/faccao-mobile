import api from './libs/axios';
import {removeData} from './libs/arm';
import {useEffect} from 'react';

export default function LoginScreen(props) {
  const out = async () => {
    await removeData('token');
    await api.get('/mobile/prestador/sair');
    console.log('123');
    props.navigation.navigate('Home');
    // props.setLogado(false);
  };

  useEffect(() => {
    out();
  }, []);
}
