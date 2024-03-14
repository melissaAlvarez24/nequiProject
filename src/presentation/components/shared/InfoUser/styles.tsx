import {StyleSheet} from 'react-native';
import {globalColors} from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  boxRow: {flexDirection: 'row'},
  boxColumn: {flexDirection: 'column'},
  boxFlexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxInfoMoney: {
    top: '30.46%',
    left: '21.11%',
  },
  text: {
    color: 'white',
    paddingRight: 5,
  },
  buttonYourMoney: {
    width: 88,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    opacity: 1,
  },
  textYourMoney: {
    fontSize: 10,
    color: globalColors.textW,
    paddingRight: 4,
  },
  boxProfileUser: {position: 'absolute', top: '7.95%', left: '7.95%'},
});
