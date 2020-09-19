import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput as TxtInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';

const TextInput = ({
  value,
  onChangeText,
  isPassword,
  isEmail,
  handleSubmit,
  submit,
  vMessage,
}) => {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.footer}>
          <TxtInput
            style={styles.textInput}
            placeholder="Type here..."
            onChangeText={(text) => onChangeText(text)}
            value={value}
            secureTextEntry={isPassword}
            keyboardType={isEmail ? 'email-address' : 'default'}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit(value)}>
            <Text style={styles.buttonText}>{submit}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View>
        {!!vMessage && <Text style={styles.invalid}>{vMessage}</Text>}
      </View>
    </>
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
export default TextInput;
