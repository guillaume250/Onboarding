import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>Press Here</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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

export default Button;
