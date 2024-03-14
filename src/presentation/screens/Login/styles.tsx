import {StyleSheet} from 'react-native';
import {globalColors} from '../../theme/theme';

export const Styles = StyleSheet.create({
  boxPrincipal: {
    flex: 1,
    backgroundColor: globalColors.primary,
  },
  select: {
    color: 'white',
    width: 328,
    height: 48,
    backgroundColor: globalColors.textW,
    borderRadius: 12,
    opacity: 0.25,
  },
  boxContainer: {
    height: 168,
    width: '91.11%',
    position: 'absolute',
    top: '69.19%',
    left: '4.444%',
  },
  boxLogo: {
    position: 'absolute',
    top: '19.21%',
    left: '35.36%',
  },
});
