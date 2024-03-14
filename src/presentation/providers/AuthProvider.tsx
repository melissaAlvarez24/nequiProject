import {useNavigation} from '@react-navigation/native';
import {PropsWithChildren, useEffect} from 'react';
import {useAuthStore} from '../store/auth/useAuthStore';

export const AuthProvider = ({children}: PropsWithChildren) => {
  const navigation = useNavigation();
  const {checkStatus, status} = useAuthStore();
  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    if (status !== 'checking') {
      if (status === 'authenticated') {
        navigation.reset({
          index: 0,
          routes: [{name: 'Wallet'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }
    }
  }, [status, navigation]);

  return <>{children}</>;
};
