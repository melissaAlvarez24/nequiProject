import {NavigationProp} from '@react-navigation/native';

export interface TWalletScreen {
  navigation: Omit<NavigationProp<ReactNavigation.RootParamList>, 'getState'>;
}
