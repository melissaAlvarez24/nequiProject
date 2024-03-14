import {View} from 'react-native';
import {InfoUserV} from '../../components/shared';
import {CustomButtomSVGC} from '../../components/shared/CustomButtonSVG/CustomButtonSVG';
import Pocket from '../../../assets/bolsillo';
import Mattress from '../../../assets/colchon';
import Loans from '../../../assets/prestamos';
import {ButtonFloatMoney} from '../../components/shared/ButtonFloatMoney/ButtonFloatMoney';
import {ActionsFloatButtonV} from '../../components/shared/ActionsFloatButton';
import {TWalletScreen} from './types';
import {Styles} from './styles';

export const WalletScreen = ({navigation}: TWalletScreen) => {
  return (
    <View style={Styles.boxPrincipal}>
      <View style={{height: '40.81%'}}>
        <InfoUserV />
      </View>
      <View style={{height: '59.19%', marginTop: 34}}>
        <View style={Styles.boxRowCenter}>
          <CustomButtomSVGC
            svg={Loans}
            label="Préstamos"
            onPressF={() => {
              navigation.navigate('Loans' as never);
            }}
          />
          <CustomButtomSVGC svg={Mattress} label="Colchón" />
          <CustomButtomSVGC svg={Pocket} label="Bolsillos" />
        </View>
      </View>

      <View style={Styles.boxFloatMoney}>
        <ButtonFloatMoney />
      </View>

      <View style={Styles.boxActions}>
        <ActionsFloatButtonV />
      </View>
    </View>
  );
};
