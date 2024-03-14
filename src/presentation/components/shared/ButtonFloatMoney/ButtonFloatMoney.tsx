import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

export const ButtonFloatMoney = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.textButton}>$</Text>
    </Pressable>
  );
};
