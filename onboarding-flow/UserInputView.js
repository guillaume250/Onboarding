import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updatePath as uP} from '@onboarding/redux';

import {
  StyleSheet,
  Text,
  TextInput as TxtInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
  Picker,
} from 'react-native';
import {TimeLine} from './';

import {
  identifiers,
  validateEmail,
  validateDate,
  validatePassword,
  validatePicker,
  validateDefault,
} from '@onboarding/utils';
const UserInputView = ({submit, probe, updatePath, timeline, tl}) => {
  const {validation, paths, id} = probe;
  const {isEmail, isDate, isPassword, isPicker} = identifiers(validation);
  const [selectedValue, setSelectedValue] = useState(null);
  const [value, onChangeText] = useState(null);
  const [vMessage, setVMessage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (val, path) => {
    const validate = isEmail
      ? validateEmail(val)
      : isDate
      ? validateDate(val)
      : isPassword
      ? validatePassword(val)
      : isPicker
      ? validatePicker(val)
      : validateDefault(val);

    if (!val) {
      path ? updatePath({currentPath: path}) : setModalVisible(true);
    } else if (!validate?.valid) {
      setVMessage(validate.message);
    } else {
      const answer = {id: id, answer: val};
      setVMessage(null);
      onChangeText(null);
      updatePath({
        currentPath: paths,
        answers: {id: id, timeline: timeline.push(answer)},
      });
    }
  };

  if (!validation) {
    switch (id) {
      case -1:
        return (
          <TouchableOpacity
            style={styles.singleButton}
            onPress={() => handleSubmit(validation, 1)}>
            <Text style={styles.buttonText}>{'Start new Chat'}</Text>
          </TouchableOpacity>
        );

      default:
        return (
          <>
            <View style={styles.duoButtons}>
              <TouchableOpacity
                style={styles.duoButton}
                onPress={() => handleSubmit(validation, 1)}>
                <Text style={styles.buttonText}>{'Start new Chat'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.duoButton}
                onPress={() => handleSubmit(validation, null)}>
                <Text style={styles.buttonText}>{'Review Chat'}</Text>
              </TouchableOpacity>
            </View>
            <TimeLine
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </>
        );
    }
  } else if (validation.toString() === 'yes,no') {
    return (
      <View style={styles.duoButtons}>
        <TouchableOpacity
          style={styles.duoButton}
          onPress={() => {
            const answer = {id: id, answer: 'yes'};
            updatePath({
              currentPath: paths?.yes,
              timeline: [...tl, answer],
            });
          }}>
          <Text style={styles.buttonText}>{'yes'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.duoButton}
          onPress={() => updatePath({currentPath: paths?.no})}>
          <Text style={styles.buttonText}>{'no'}</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (isPicker) {
    return (
      <View style={styles.pickerView}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          {validation.map((period) => (
            <Picker.Item key={period} label={period} value={period} />
          ))}
        </Picker>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit(selectedValue)}>
          <Text style={styles.buttonText}>{submit}</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (!!validation || isEmail || isDate || isPassword) {
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
  } else {
    return null;
  }
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

function mapDispatchToProps(dispatch) {
  return {
    updatePath: (path) => dispatch(uP(path)),
  };
}
const mapStateToProps = (state) => {
  return {timeline: state.timeline};
};
export default connect(mapStateToProps, mapDispatchToProps)(UserInputView);
