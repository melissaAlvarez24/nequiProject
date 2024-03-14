import {Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Styles} from './styles';
import Part1 from '../../../../assets/part1';
import part2 from '../../../../assets/part2';
export const LogoC = () => {
  return (
    <View style={Styles.boxPrincipal}>
      <Text style={Styles.title}>NEQUI</Text>
      <View style={Styles.boxSvgs}>
        <SvgXml style={Styles.partOneLogo} xml={Part1} />
        <SvgXml style={Styles.partTwoLogo} xml={part2} />
      </View>
    </View>
  );
};
