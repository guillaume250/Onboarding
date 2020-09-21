import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput as TxtInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  View,
  Keyboard,
} from 'react-native';
import Button from './Button';
import {theme} from '../theme';

const TextInput = ({
  value,
  onChangeText,
  isPassword,
  isEmail,
  handleSubmit,

  vMessage,
  TouchableOpacity,
}) => {
  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <TxtInput
            style={styles.textInput}
            placeholder="Type here..."
            placeholderTextColor={theme.primeBg}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            secureTextEntry={isPassword}
            keyboardType={isEmail ? 'email-address' : 'default'}
          />
          <Button
            style={styles.button}
            onPress={() => handleSubmit(value)}
            text={'Continue'}
          />
        </View>
        <View onPress={() => console.log('KAKA')}>
          {!!vMessage && <Text style={styles.invalid}>{vMessage}</Text>}
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
  },
  textInput: {
    width: '70%',
    marginRight: 20,
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.secondBg,
    backgroundColor: 'white',
    color: theme.night,
  },

  invalid: {
    color: theme.error,
    alignSelf: 'auto',
    margin: 20,
    paddingTop: 20,
  },
  button: {
    backgroundColor: theme.primeBg,
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  pickerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonText: {color: 'white'},
});

export default TextInput;
