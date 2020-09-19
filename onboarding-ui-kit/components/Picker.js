import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput as TxtInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
  Picker as Pk,
} from 'react-native';

const Picker = ({validation, handleSubmit, submit}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={styles.pickerView}>
      <Pk
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {validation.map((period) => (
          <Pk.Item key={period} label={period} value={period} />
        ))}
      </Pk>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSubmit(selectedValue)}>
        <Text style={styles.buttonText}>{submit}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  textInput: {
    width: '70%',
    marginRight: 20,
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E0E8F1',
    backgroundColor: 'white',
  },
  yesno: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  yesnoButtons: {
    backgroundColor: '#4F93FE',
    height: 40,
    width: 100,
    padding: 10,
    marginRight: 20,
    borderRadius: 10,
  },
  invalid: {color: 'red', alignSelf: 'auto', margin: 20, paddingTop: 20},
  button: {
    backgroundColor: '#4F93FE',
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
  pickerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  picker: {
    marginRight: 20,
    height: 150,
    width: 200,
    top: Platform.OS === 'ios' ? -32 : 0,
  },
  duoButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  duoButton: {
    backgroundColor: '#4F93FE',
    height: 40,
    width: 150,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  buttonText: {color: 'white'},
  singleButton: {
    backgroundColor: '#4F93FE',
    height: 40,
    width: 200,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
});
export default Picker;
