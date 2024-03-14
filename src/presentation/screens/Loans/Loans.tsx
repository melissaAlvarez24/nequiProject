import {FlatList, View} from 'react-native';
import {Loans} from './types';
import {
  CardLoanV,
  CustomSelect,
  CustomTextInput,
} from '../../components/shared';
import {globalColors} from '../../theme/theme';
import {ActionsFloatButtonV} from '../../components/shared/ActionsFloatButton';
import {Styles} from './styles';

export const Loansc = ({
  data: {dataShow, searchText, width, options, selectedOption},
  handleSearchText,
  handleSelect,
}: Loans) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: globalColors.background,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginVertical: 10,
        }}
      >
        <CustomTextInput
          width={width * 0.88}
          backgroundColor={globalColors.primary}
          placeholder="Búsqueda ..."
          type="default"
          handleChangeText={handleSearchText}
          value={searchText}
        />
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginVertical: 10,
        }}
      >
        <CustomSelect
          backgroundColor={globalColors.primary}
          width={width * 0.88}
          placeholder="Estado del prestamo"
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
      </View>

      <FlatList
        data={dataShow}
        style={{width: '100%', paddingHorizontal: 20}}
        renderItem={({
          item: {backgroundColor, description, iconName, title, state},
        }) => (
          <CardLoanV
            backgroundColor={backgroundColor}
            description={description}
            iconName={iconName}
            title={title}
            state={state}
          />
        )}
      />

      <View style={Styles.boxActionFloatButton}>
        <ActionsFloatButtonV />
      </View>
    </View>
  );
};
