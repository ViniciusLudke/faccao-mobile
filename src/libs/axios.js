import axios from 'react-native-axios';
import {removeData, getData} from '../libs/arm';
const baseUrl = 'http://10.0.2.2:4000';

export default api = axios.create({
  baseURL: baseUrl,
  headers: {
    empresa: '1', //getData('empresa')
    token: getData('token'),
  },
});

export const verifyErr = json => {
  if (json.notAllowed) {
    removeData('token');
    navigation.navigate('Login');
  }
};
