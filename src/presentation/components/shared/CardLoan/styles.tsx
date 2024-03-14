import {StyleSheet} from 'react-native';
import {globalColors} from '../../../theme/theme';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.background,
    borderRadius: 10,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    width: '100%',
    height: 110,
    // Otros estilos si los hubiera
  },
  BoxRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 14,
  },
  BoxIcon: {
    width: 48,
    height: 48,
    marginRight: 13,
    borderRadius: 5,
    transform: [{rotate: '45deg'}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxColumn: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 14,
  },
  title: {
    fontFamily: 'Red Hat Display',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.13,
    color: globalColors.textPrimary,
    opacity: 1,
    textAlign: 'left',
  },
  textDescription: {
    maxWidth: '80%',
    fontFamily: 'Red Hat Display',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0,
    color: '#6E6E6E',
    opacity: 1,
    textAlign: 'left',
  },
});
