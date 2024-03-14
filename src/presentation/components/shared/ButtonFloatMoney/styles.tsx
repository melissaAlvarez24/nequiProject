import {StyleSheet} from 'react-native';
import {globalColors} from '../../../theme/theme';

export const styles = StyleSheet.create({
  button: {
    elevation: 6,
    backgroundColor: globalColors.secondary,
    borderRadius: 100,
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: globalColors.textW,
    fontSize: 24,
    fontFamily: 'Font Awesome 6 Pro',
  },
});
