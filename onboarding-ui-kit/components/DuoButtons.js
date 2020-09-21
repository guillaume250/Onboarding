import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../theme';

const DuoButtons = ({leftButton, rightButton}) => {
  return (
    <View style={styles.duoButtons}>
      <TouchableOpacity
        style={[styles.duoButton, styles.secondaryButton]}
        onPress={leftButton.onPress}>
        <Text style={styles.secondaryButton}>{leftButton.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.duoButton, styles.primaryButton]}
        onPress={rightButton.onPress}>
        <Text style={styles.primaryButton}>{rightButton.text}</Text>
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
    height: 40,
    width: 150,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  primaryButton: {
    backgroundColor: theme.primaryButton,
    color: theme.primaryButtonText,
  },
  secondaryButton: {
    backgroundColor: theme.secondaryButton,
    color: theme.secondaryButtonText,
  },
});

export default DuoButtons;
