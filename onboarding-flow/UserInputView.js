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

const UserInputView = ({probe, updatePath, timeline, tl}) => {
  const {validation, paths, id} = probe;
  const {isEmail, isDate, isPassword, isPicker} = identifiers(validation);
  const [value, onChangeText] = useState(null);
  const [validationMessage, setValidationMessage] = useState(null);
  const [showTimeline, setShowTimeline] = useState(true);

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
      path ? updatePath({currentPath: path}) : setShowTimeline(true);
    } else if (!validate?.valid) {
      setValidationMessage(validate.message);
    } else {
      setValidationMessage(null);
      onChangeText(null);
      updatePath({
        currentPath: paths,
        timeline: [...tl, {id: id, question: probe, answer: val}],
      });
    }
  };

  if (!validation) {
    switch (id) {
      case -1:
        return (
          <Button
            onPress={() => handleSubmit(null, 1)}
            text={'Start new Chat'}
          />
        );

      default:
        return (
          <>
            <DuoButtons
              leftButton={{
                text: 'Start new Chat',
                onPress: () => handleSubmit(null, 1),
              }}
              rightButton={{
                text: 'Review Chat',
                onPress: () => handleSubmit(null, null),
              }}
            />
            <TimeLine
              modalVisible={showTimeline}
              setModalVisible={setShowTimeline}
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
            updatePath({
              currentPath: paths?.yes,
              timeline: [...tl, {id: id, question: probe, answer: 'Yes'}],
            });
          },
        }}
      />
    );
  } else if (isPicker) {
    return <Picker handleSubmit={handleSubmit} validation={validation} />;
  } else if (!!validation || isEmail || isDate || isPassword) {
    return (
      <TextInput
        value={value}
        onChangeText={onChangeText}
        isPassword={isPassword}
        isEmail={isEmail}
        handleSubmit={handleSubmit}
        vMessage={validationMessage}
        setValidationMessage={setValidationMessage}
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
