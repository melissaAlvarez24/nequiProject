import {StyleSheet} from 'react-native';
import {globalColors} from '../../../theme/theme';

export const Styles = StyleSheet.create({
  partOneLogo: {
    position: 'absolute',
  },
  partTwoLogo: {
    position: 'absolute',
    top: 7,
  },
  boxPrincipal: {
    flex: 1,
  },
  title: {
    color: globalColors.textW,
    letterSpacing: 5,
    fontSize: 35,
    top: 119,
    left: 0,
  },
  boxSvgs: {
    position: 'absolute',
    left: '10.13%',
  },
});
