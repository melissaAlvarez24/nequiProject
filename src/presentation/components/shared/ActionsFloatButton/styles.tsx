import {StyleSheet} from 'react-native';
import {globalColors} from '../../../theme/theme';

export const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 6,
    flex: 1,
    padding: 4,
    backgroundColor: globalColors.background,
    flexDirection: 'row',
    borderRadius: 34,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: '#E9E6ED',
  },
  button: {
    flex: 1,
    width: '30%',
    height: '100%',
    borderRadius: 26,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 8,
    fontFamily: 'Red Hat Display',
    color: globalColors.textPrimary,
  },
});
