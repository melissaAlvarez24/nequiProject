import {Pressable, Text} from 'react-native';
import {PrimaryButtonC} from './types';
import {Styles} from './styles';

export const PrimaryButton = ({
  text,
  isLoading,
  onLongPressF,
  onPressF,
}: PrimaryButtonC) => {
  return (
    <Pressable
      onPress={onPressF}
      disabled={isLoading}
      onLongPress={onLongPressF}
      style={({pressed}) => [Styles.button, pressed && Styles.buttonPressed]}
    >
      <Text style={Styles.textButton}>{text}</Text>
    </Pressable>
  );
};
