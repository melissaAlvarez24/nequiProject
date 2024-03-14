import {LoginC} from './LoginC';
import {useState} from 'react';
import {Alert} from 'react-native';
import {TTypeDocument} from './types';
import {useAuthStore} from '../../store/auth/useAuthStore';

export const LoginV = () => {
  const [document, setDocument] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TTypeDocument | null>(
    null,
  );
  const {login} = useAuthStore();
  const handleChangeDocument = (value: string) => {
    setDocument(value);
  };
  const handleSelect = (option: any) => {
    setSelectedOption(option);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    const resp = await login(selectedOption?.value || '', document);
    if (typeof resp === 'boolean') {
      if (!resp) {
        setIsLoading(false);
        return;
      }
    } else {
      if (resp && resp.title) {
        setIsLoading(false);
        return Alert.alert(resp.title, resp.description);
      }
    }
  };
  return (
    <LoginC
      data={{document, selectedOption, isLoading}}
      handleChangeDocument={handleChangeDocument}
      handleSelect={handleSelect}
      handleSubmit={handleSubmit}
    />
  );
};
