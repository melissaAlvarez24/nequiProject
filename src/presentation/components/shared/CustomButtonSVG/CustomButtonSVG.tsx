import {Pressable, Text, View} from 'react-native';
import {TCustomButtomSVGC} from './types';
import {Styles} from './styles';
import {SvgXml} from 'react-native-svg';

export const CustomButtomSVGC = ({
  svg,
  label,
  onLongPressF,
  onPressF,
}: TCustomButtomSVGC) => {
  return (
    <View
      style={{
        height: 88,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Pressable
        onPress={onPressF}
        onLongPress={onLongPressF}
        style={({pressed}) => [Styles.button, pressed && Styles.buttonPressed]}
      >
        <SvgXml width={64} height={64} xml={svg} />
        <View>
          <Text style={Styles.textButton}>{label}</Text>
        </View>
      </Pressable>
    </View>
  );
};
