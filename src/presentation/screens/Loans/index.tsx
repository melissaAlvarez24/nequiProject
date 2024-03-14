import {useState} from 'react';
import {Loansc} from './Loans';
import {TDataDummy, TTypeDocument} from './types';
import {useWindowDimensions} from 'react-native';

export const LoansV = () => {
  const [dataDummy] = useState<TDataDummy[]>([
    {
      iconName: 'cloudy-night-outline',
      backgroundColor: '#D6EAF8',
      title: 'Préstamo Dormilon',
      description: 'Dormir sin pensar en tus deudas es posible',
      state: 'rejected',
    },
    {
      iconName: 'rocket-outline',
      backgroundColor: '#F4ECF7',
      title: 'Préstamo Buzz Lightyear',
      description: '¿Te Quieres ir a la luna? Quien dijo miedo?',
      state: 'active',
    },
    {
      iconName: 'trail-sign-outline',
      backgroundColor: '#D1F2EB',
      title: 'Préstamo Nosé Que Hacer',
      description: 'No sabes que hacer con tu vida? Nosotros tampoco',
      state: 'pending',
    },
    {
      iconName: 'thermometer-outline',
      backgroundColor: '#FAE5D3',
      title: 'Préstamo QUE Calor',
      description: 'Te préstamos para el aire, pero no para la luz!',
      state: 'rejected',
    },
  ]);
  const [options] = useState<TTypeDocument[]>([
    {label: 'Rechazado', value: 'rejected'},
    {label: 'Pendiente', value: 'pending'},
    {label: 'Aprobado', value: 'active'},
    {label: 'Todas', value: 'all'},
  ]);
  const [dataShow, setDataShow] = useState(dataDummy);
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState<TTypeDocument | null>(
    null,
  );
  const {width} = useWindowDimensions();
  const handleSearchText = (value: string) => {
    setSearchText(value);
    filterData(value, selectedOption);
  };

  const handleSelect = (option: TTypeDocument) => {
    setSelectedOption(option);
    filterData(searchText, option);
  };

  const filterData = (text: string, option: TTypeDocument | null) => {
    let filteredData = dataDummy;
    if (text && text.trim() !== '') {
      filteredData = filteredData.filter(
        ({title, description}) =>
          title.toLowerCase().includes(text.toLowerCase()) ||
          description.toLowerCase().includes(text.toLowerCase()),
      );
    }
    if (option && option.value !== 'all') {
      filteredData = filteredData.filter(
        ({state}) => state.toLowerCase() === option.value,
      );
    }
    setDataShow(filteredData);
  };

  return (
    <Loansc
      data={{dataShow, searchText, width, options, selectedOption}}
      handleSearchText={handleSearchText}
      handleSelect={handleSelect}
    />
  );
};
