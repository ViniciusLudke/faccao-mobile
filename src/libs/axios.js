import axios from 'react-native-axios';
import {removeData, getData} from '../libs/arm';
const baseUrl = 'http://10.0.2.2:4000';

export default api = axios.create({
  baseURL: baseUrl,
  headers: {
    empresa: '1', //getData('empresa')
    token: '$2a$10$rraq5MYalcG021m6N3N6TuR8jmLuUCDvcI36O3PkQ8RvGgdOV5eIu', //getData('token'),
  },
});

export const verifyErr = json => {
  if (json.notAllowed) {
    removeData('token');
    navigation.navigate('Login');
  }
};
