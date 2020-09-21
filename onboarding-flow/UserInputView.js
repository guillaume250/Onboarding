import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updatePath as uP} from '@onboarding/redux';
import {DuoButtons, Button, Picker, TextInput} from '@onboarding/ui-kit';
import TimeLine from './TimeLine';

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
          <Button
            onPress={() => handleSubmit(validation, 1)}
            text={'Start new Chat'}
          />
        );

      default:
        return (
          <>
            <DuoButtons
              leftButton={{
                text: 'Start new Chat',
                onPress: () => handleSubmit(validation, 1),
              }}
              rightButton={{
                text: 'Review Chat',
                onPress: () => handleSubmit(validation, null),
              }}
            />
            <TimeLine
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </>
        );
    }
  } else if (validation.toString() === 'yes,no') {
    return (
      <DuoButtons
        leftButton={{
          text: 'No',
          onPress: () => updatePath({currentPath: paths?.no}),
        }}
        rightButton={{
          text: 'Yes',
          onPress: () => {
            const answer = {id: id, answer: 'yes'};
            updatePath({
              currentPath: paths?.yes,
              timeline: [...tl, answer],
            });
          },
        }}
      />
    );
  } else if (isPicker) {
    return (
      <Picker
        handleSubmit={handleSubmit}
        validation={validation}
        submit={submit}
      />
    );
  } else if (!!validation || isEmail || isDate || isPassword) {
    return (
      <TextInput
        value={value}
        onChangeText={onChangeText}
        isPassword={isPassword}
        isEmail={isEmail}
        handleSubmit={handleSubmit}
        submit={submit}
        vMessage={vMessage}
        setVMessage={setVMessage}
      />
    );
  } else {
    return null;
  }
};

function mapDispatchToProps(dispatch) {
  return {
    updatePath: (path) => dispatch(uP(path)),
  };
}
const mapStateToProps = (state) => {
  return {timeline: state.timeline};
};
export default connect(mapStateToProps, mapDispatchToProps)(UserInputView);
