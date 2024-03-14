import {StyleSheet} from 'react-native';
import {globalColors} from '../../../theme/theme';

export const Styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    backgroundColor: globalColors.secondary,
    borderRadius: 24,
    opacity: 1,
    justifyContent: 'center', // Para alinear el contenido verticalmente
    alignItems: 'center', // Para alinear el contenido horizontalmente
  },
  textButton: {
    width: 296,
    height: 16,
    fontFamily: 'Red Hat Display',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0,
    color: globalColors.textW,
    textAlign: 'center',
    opacity: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
