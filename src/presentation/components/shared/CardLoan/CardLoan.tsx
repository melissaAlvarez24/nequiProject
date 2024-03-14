import React, {useState} from 'react';
import {Styles} from './styles';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalColors} from '../../../theme/theme';
import {TState} from './types';

export const CardLoanC = ({
  backgroundColor,
  iconName,
  title,
  description,
  state,
}: {
  backgroundColor: string;
  iconName: string;
  title: string;
  description: string;
  state: TState;
}) => {
  const [statesMapped] = useState({
    colors: {
      rejected: 'red',
      pending: 'grey',
      active: 'green',
    },
    text: {
      rejected: 'Rechazado',
      pending: 'Pendiente',
      active: 'Aprovado',
    },
  });
  return (
    <View style={Styles.container}>
      <View style={Styles.BoxRow}>
        <View
          style={[
            Styles.BoxIcon,
            {
              backgroundColor: backgroundColor,
            },
          ]}
        >
          <Icon
            style={{
              transform: [{rotate: '-45deg'}],
              justifyContent: 'center',
              alignItems: 'center',
            }}
            name={iconName}
            size={30}
            color={globalColors.primary}
          />
        </View>
        <View style={Styles.BoxColumn}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={Styles.title}>
            {title}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={Styles.textDescription}
          >
            {description}
          </Text>
        </View>
      </View>

      <View
        style={[Styles.BoxRow, {position: 'absolute', bottom: 2, right: 2}]}
      >
        <View
          style={{
            backgroundColor: statesMapped.colors[state],
            borderRadius: 100,
            height: 5,
            width: 5,
            marginRight: 5,
          }}
        />
        <Text
          style={{
            color: statesMapped.colors[state],
          }}
        >
          {statesMapped.text[state]}
        </Text>
      </View>
    </View>
  );
};
