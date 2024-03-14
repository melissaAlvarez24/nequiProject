import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  selectButton: {
    borderWidth: 0,
    width: '100%',
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  iconSelect: {
    position: 'absolute',
    top: '29.16%',
    right: '3.66%',
  },
  selectedOption: {
    left: '4.88%',
    top: '29.16%',
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'Red Hat Display',
    fontWeight: '600',
    letterSpacing: 0,
    color: '#FFFFFF',
    textAlign: 'left',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    maxHeight: '80%',
    width: '80%',
    overflow: 'hidden',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
