import React, {useState} from 'react';
import {ActionsFloatsButtonC} from './ActionsFloatButton';
import {StackActions, useNavigation} from '@react-navigation/native';
import {TActions} from './types';
import {useAuthStore} from '../../../store/auth/useAuthStore';

export const ActionsFloatButtonV = () => {
  const navigator = useNavigation();
  const {closeSession} = useAuthStore();
  const [lastPressed, setLastPressed] = useState(1);
  const [actions] = useState<TActions[]>([
    {
      id: 1,
      iconName: 'home',
      label: 'Inicio',
      action: () => {
        if (navigator.canGoBack()) {
          navigator.dispatch(StackActions.popToTop());
        }
      },
    },
    {id: 2, iconName: 'receipt-outline', label: 'Movimientos'},
    {
      id: 3,
      iconName: 'grid-outline',
      label: 'Servicios',
      action: async () => closeSession(),
    },
  ]);

  const handlePress = (buttonId: number) => {
    setLastPressed(buttonId);
    const exists = actions.find(item => item.id === buttonId);
    if (exists && exists.action) {
      exists.action();
    }
  };
  return (
    <ActionsFloatsButtonC
      data={{lastPressed, actions}}
      handlePress={handlePress}
      closeSession={closeSession}
    />
  );
};
