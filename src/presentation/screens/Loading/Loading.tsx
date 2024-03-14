import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';
import { globalColors } from '../../theme/theme';

export const LoadingC = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={globalColors.primary} />
  </View>
);
