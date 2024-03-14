import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Header from '../../../../assets/header';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalColors} from '../../../theme/theme';
import {ProfileUserV} from '../ProfileUser';
import {styles} from './styles';
import {TInfoUser} from './types';
export const InfoUserC = ({
  data: {moneyAvailable, totalMoney, width, height},
  calculateValue,
}: TInfoUser) => {
  return (
    <View style={{flex: 1}}>
      <SvgXml
        width={calculateValue(100.54, width)}
        height={calculateValue(127.67, height)}
        style={{
          position: 'absolute',
          top: calculateValue(38.31, height) * -1,
        }}
        xml={Header}
      />
      <View
        style={[
          styles.boxColumn,
          styles.boxFlexCenter,
          styles.boxInfoMoney,
          {
            width: calculateValue(52.94, width),
            height: calculateValue(13.28, height),
          },
        ]}
      >
        <View style={styles.boxRow}>
          <Text style={[styles.text, {fontSize: 12}]}>Disponible</Text>
          <Icon name="eye-off-outline" size={18} color={globalColors.textW} />
        </View>
        <View style={styles.boxRow}>
          <Text style={[styles.text, {fontSize: 16}]}>
            ${' '}
            {typeof moneyAvailable === 'number' && !isNaN(moneyAvailable)
              ? moneyAvailable.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : '000.000,00'}
          </Text>
        </View>

        <View style={[styles.boxRow, {marginTop: 12}]}>
          <Text style={[styles.text, {fontSize: 12}]}>
            Total: ${' '}
            {typeof totalMoney === 'number' && !isNaN(totalMoney)
              ? totalMoney.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : '000.000,00'}
          </Text>
        </View>

        <View style={{marginTop: 8}}>
          <Pressable
            style={[
              styles.boxRow,
              styles.boxFlexCenter,
              styles.buttonYourMoney,
            ]}
          >
            <Text style={styles.textYourMoney}>Tu plata</Text>
            <Icon
              name="chevron-down-outline"
              size={18}
              color={globalColors.textW}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.boxProfileUser}>
        <ProfileUserV />
      </View>
    </View>
  );
};
