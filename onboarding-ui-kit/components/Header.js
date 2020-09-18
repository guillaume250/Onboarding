import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OnBoardingView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>onboarding OnBoarding App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ECF5F6',
    padding: 10,
    paddingTop: 50,
    paddingBottom: 50,
  },
  text: {
    alignSelf: 'center',
  },
});

export default OnBoardingView;
