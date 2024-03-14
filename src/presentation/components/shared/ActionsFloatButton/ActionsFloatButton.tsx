import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalColors} from '../../../theme/theme';
import {TActionsFloatsButtonC} from './types';

export const ActionsFloatsButtonC = ({
  data: {actions, lastPressed},
  handlePress,
}: TActionsFloatsButtonC) => {
  return (
    <View style={styles.buttonContainer}>
      {actions.map(({iconName, id, label}) => (
        <Pressable
          key={id}
          style={({pressed}) => [
            styles.button,
            {backgroundColor: lastPressed === id ? '#E9E6ED' : 'white'},
            pressed && styles.pressed,
          ]}
          onPress={() => handlePress(id)}
        >
          <Icon name={iconName} size={22} color={globalColors.primary} />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.textButton}
          >
            {label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
