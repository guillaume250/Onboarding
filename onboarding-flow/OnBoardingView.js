import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ChatBox, TextInput} from '@onboarding/ui-kit';
import {useData} from '@onboarding/hooks';
import {connect} from 'react-redux';
import {UserInputView} from './';
const OnBoardingView = ({currentPath, timeline}) => {
  const {data, probe} = useData();
  const [step, setStep] = useState(1);

  const [value, onChangeText] = useState('');
  const [submit, changeSubmitText] = useState('Continue');
  const handleSubmit = () => {
    if (step < data.length - 1) {
      setStep(step + 1);
    } else {
      changeSubmitText('Review answers');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ChatBox probe={probe(currentPath)} />
      <UserInputView
        probe={probe(currentPath)}
        tl={timeline}
        style={styles.textInput}
        placeholder="Type here..."
        onChangeText={(text) => onChangeText(text)}
        value={value}
        submit={submit}
        handleSubmit={handleSubmit}
      />
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
    backgroundColor: '#ECF5F6',
    height: 80,
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
  button: {
    backgroundColor: '#4F93FE',
    height: 40,
    padding: 10,
    borderRadius: 2,
  },
});

const mapStateToProps = (state) => {
  return {currentPath: state.currentPath, timeline: state.timeline};
};
export default connect(mapStateToProps)(OnBoardingView);
