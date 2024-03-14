import {StyleSheet} from 'react-native';
import {globalColors} from '../../../theme/theme';

export const Styles = StyleSheet.create({
  button: {
    width: 64,
    height: 64,
    borderRadius: 24,
    opacity: 1,
    justifyContent: 'center', // Para alinear el contenido verticalmente
    alignItems: 'center', // Para alinear el contenido horizontalmente
  },
  textButton: {
    width: 90,
    fontFamily: 'Red Hat Display',
    fontSize: 16,
    lineHeight: 21,
    color: globalColors.textPrimary,
    textAlign: 'center',
  },
});
