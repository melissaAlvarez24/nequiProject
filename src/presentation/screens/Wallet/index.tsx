import {useNavigation} from '@react-navigation/native';
import {WalletScreen} from './WalletScreen';
export const WalletV = () => {
  const navigation = useNavigation();
  return <WalletScreen navigation={navigation} />;
};
