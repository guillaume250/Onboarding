import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {theme} from '../theme';

const Button = ({onPress, text, ...props}) => {
  return (
    <TouchableOpacity style={styles.singleButton} onPress={onPress} {...props}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {color: theme.snow},
  singleButton: {
    backgroundColor: theme.primaryButton,
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

export default Button;
