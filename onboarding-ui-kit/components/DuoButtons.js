import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DuoButtons = ({leftButton, rightButton}) => {
  return (
    <View style={styles.duoButtons}>
      <TouchableOpacity style={styles.duoButton} onPress={leftButton.onPress}>
        <Text style={styles.buttonText}>{leftButton.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.duoButton} onPress={rightButton.onPress}>
        <Text style={styles.buttonText}>{rightButton.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default DuoButtons;