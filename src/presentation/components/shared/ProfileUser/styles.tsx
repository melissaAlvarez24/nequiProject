import {StyleSheet} from 'react-native';
import {globalColors} from '../../../theme/theme';

export const Styles = StyleSheet.create({
  boxPrincipal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainerProfile: {
    width: 56,
    height: 56,
    backgroundColor: '#49346A',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: 16,
  },
  text: {
    fontFamily: 'Red Hat Display',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '500',
    color: globalColors.textW,
  },
});
