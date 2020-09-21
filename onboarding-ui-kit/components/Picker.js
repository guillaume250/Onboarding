import React, {useState} from 'react';
import {StyleSheet, Platform, View} from 'react-native';
import {Picker as Pk} from '@react-native-community/picker';

import Button from './Button';
import {theme} from '../theme';

const Picker = ({validation, handleSubmit, submit}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={styles.pickerView}>
      <Pk
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {validation.map((period) => (
          <Pk.Item key={period} label={period} value={period} />
        ))}
      </Pk>

      <Button
        style={styles.button}
        onPress={() => handleSubmit(selectedValue)}
        text={submit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.primeBg,
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  pickerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
  },
  picker: {
    marginRight: 20,
    height: 150,
    width: 200,
    top: Platform.OS === 'ios' ? -32 : 0,
  },
});
export default Picker;
