import React from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalColors} from '../../../theme/theme';
import {styles} from './styles';
import {TCustomSelectC} from './types';
const CustomSelectC = ({
  data: {
    modalVisible,
    options,
    placeholder,
    selectedOption,
    backgroundColor,
    width,
  },
  handleSelect,
  toggleModal,
}: TCustomSelectC) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleModal}
        style={[
          styles.selectButton,
          width ? {width: width} : null,
          backgroundColor ? {backgroundColor: backgroundColor} : null,
        ]}
      >
        <Text style={styles.selectedOption}>
          {selectedOption?.label || placeholder}
        </Text>
        <Icon
          style={styles.iconSelect}
          name="chevron-down-outline"
          size={22}
          color={globalColors.textW}
        />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={toggleModal}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={item => item.value.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  style={styles.option}
                >
                  <Text style={{color: globalColors.primary, fontSize: 16}}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CustomSelectC;
