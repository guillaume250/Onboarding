import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../theme';

const Container = (props) => {
  return <View style={styles.container} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: theme.whiteBg,
  },
});
export default Container;
