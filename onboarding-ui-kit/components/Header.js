import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {theme} from '../theme';
const OnBoardingView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Telehealth App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.primeBg,
    padding: 20,
    marginBottom: 50,
    shadowColor: theme.light,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 5,
    },
  },
  text: {
    alignSelf: 'center',
    color: theme.snow,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OnBoardingView;
