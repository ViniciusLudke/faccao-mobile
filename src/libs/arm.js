import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storage_Key, value) => {
  try {
    await AsyncStorage.setItem(storage_Key, value);
    console.log('Armazenado!', value);
  } catch (e) {
    console.log('Error ao salvar:', e);
  }
};

export const getData = async storage_Key => {
  try {
    const value = await AsyncStorage.getItem(storage_Key);
    if (value !== null) {
      console.log('Valor armazenado:', value);
    }
    return value.toString();
  } catch (e) {
    console.log('error reading value: ' + storage_Key);
  }
};

export const removeData = async storage_Key => {
  try {
    await AsyncStorage.removeItem(storage_Key);
    console.log('item removido');
  } catch (e) {
    console.log('error removendo data');
  }
};
