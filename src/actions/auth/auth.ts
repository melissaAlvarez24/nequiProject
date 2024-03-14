import {StorageAdapter} from '../../config/adapters/async-storage';
const users = [
  {
    documentType: 'Cedula de ciudadanía',
    numberDocument: '1002023400',
    name: 'Melissa A',
    total: 200000,
    moneyAvailable: 10000,
    token: 'Melissa is authorized',
  },
];
export const authLogin = (documentType: string, numberDocument: string) => {
  if (!documentType || !numberDocument) {
    return {
      title: 'Datos incompletos',
      description: 'Asegurese de seleccionar el tipo y número de documento',
    };
  }
  const existUser = users.find(item => item.numberDocument === numberDocument);
  if (!existUser) {
    return {
      title: 'Usuario no encontrado',
      description: `El usuario con ${documentType} ${numberDocument} no se encuentra registrado`,
    };
  }
  if (existUser.documentType !== documentType) {
    return {
      title: 'Tipo de documento incorrecto',
      description: `El usuario con ${numberDocument} no se encuentra registrado con el Tipo de documento ${documentType}`,
    };
  }
  return {user: existUser, token: 'Melissa is authorized'};
};

export const checkStatus = async () => {
  // Here we could make a request for check if the token is valid, but i dont use any backend for that reason i only return the token
  const dataToken = await StorageAdapter.getItem('token');
  if (dataToken) {
    const dataUser = users.find(item => item.token === dataToken);
    if (!dataUser) {
      return false;
    }
    return {user: dataUser, token: dataToken};
  }
  return false;
};
