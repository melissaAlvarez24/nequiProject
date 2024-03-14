import {View} from 'react-native';
import {PrimaryButton} from '../../components';
import {TLoginC} from './types';
import {LogoV} from '../../components/shared';
import {Styles} from './styles';
import {CustomTextInput, CustomSelect} from '../../components/shared';
const options = [
  {label: 'Cedula de ciudadanía', value: 'Cedula de ciudadanía'},
  {label: 'Cedula de extranjería', value: 'Cedula de extranjería'},
];
export const LoginC = ({
  data: {selectedOption, document, isLoading},
  handleChangeDocument,
  handleSelect,
  handleSubmit,
}: TLoginC) => {
  return (
    <View style={Styles.boxPrincipal}>
      <View style={Styles.boxLogo}>
        <LogoV />
      </View>
      <View style={Styles.boxContainer}>
        <View style={{marginBottom: 8}}>
          <CustomSelect
            placeholder="Tipo de documento"
            options={options}
            selectedOption={selectedOption}
            onSelect={handleSelect}
          />
        </View>
        <View style={{marginBottom: 16}}>
          <CustomTextInput
            placeholder="Número de documento"
            value={document}
            type="numeric"
            handleChangeText={handleChangeDocument}
          />
        </View>
        <View>
          <PrimaryButton
            isLoading={isLoading}
            onPressF={handleSubmit}
            text="Entra"
          />
        </View>
      </View>
    </View>
  );
};
