import React, {useEffect, useState} from 'react';
import CustomSelectC from './CustomSelectC';
import {TCustomSelectV} from './types';
export const CustomSelect = ({
  options,
  onSelect,
  placeholder,
  selectedOption,
  width,
  backgroundColor,
}: TCustomSelectV) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectItem = (item: any) => {
    onSelect(item);
    setModalVisible(false);
  };

  const toggleModalItem = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <CustomSelectC
      handleSelect={handleSelectItem}
      toggleModal={toggleModalItem}
      data={{
        placeholder,
        options,
        modalVisible,
        selectedOption,
        width,
        backgroundColor,
      }}
    />
  );
};
