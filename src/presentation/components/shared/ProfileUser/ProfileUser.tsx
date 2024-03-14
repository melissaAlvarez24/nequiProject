import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalColors} from '../../../theme/theme';
import {TProfileUser} from './types';
import {Styles} from './styles';
export const ProfileUserC = ({userName}: TProfileUser) => {
  return (
    <View style={Styles.boxPrincipal}>
      <View style={Styles.boxContainerProfile}>
        <View>
          <Icon name="person-outline" size={24} color={globalColors.textW} />
        </View>
      </View>

      <View>
        <Text
          style={{
            ...Styles.text,
            fontSize: 12,
            lineHeight: 16,
          }}
        >
          Hola,
        </Text>
        <Text style={Styles.text}>{userName || 'Melissa'}</Text>
      </View>
    </View>
  );
};
