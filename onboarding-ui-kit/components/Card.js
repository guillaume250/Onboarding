import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../theme';

const Card = (props) => {
  const {flexDirection, style} = props;
  return <View style={[styles.container, flexDirection, style]} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    backgroundColor: theme.cardBg,
    maxHeight: 200,
    borderRadius: 10,
  },
});

export default Card;
