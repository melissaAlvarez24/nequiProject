import React from 'react';
import {View, TextInput, StyleSheet, KeyboardTypeOptions} from 'react-native';
import {globalColors} from '../../../theme/theme';

export const CustomTextInput = ({
  value,
  type,
  width,
  backgroundColor,
  placeholder,
  handleChangeText,
}: {
  value: string;
  type?: KeyboardTypeOptions;
  placeholder: string;
  width?: number;
  backgroundColor?: string;
  handleChangeText: (value: string) => void;
}) => {
  return (
    <View
      style={[
        styles.container,
        width ? {width: width} : null,
        backgroundColor ? {backgroundColor: backgroundColor} : null,
      ]}
    >
      <TextInput
        keyboardType={type || 'numeric'}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#FFFFFF"
        value={value}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 16,
    color: globalColors.textW,
    fontFamily: 'Red Hat Display',
    fontSize: 16,
    lineHeight: 21,
  },
});
