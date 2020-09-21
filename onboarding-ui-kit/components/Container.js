import React from 'react';
import {StyleSheet, View} from 'react-native';

const Container = (props) => {
  return <View style={styles.container} {...props} />;
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
export default Container;
