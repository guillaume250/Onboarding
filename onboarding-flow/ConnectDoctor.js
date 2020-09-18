import React from 'react';
import {
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Connector = ({modalVisible, setModalVisible}) => {
  const wss = 'wss://echo.websocket.org';
  const webSocket = new WebSocket(wss, 'protocolOne');
  // The snippet below illustrates how to find and filter
  // (thus causing data loss) a cyclic reference by using the
  // replacer parameter of JSON.stringify():
  // Source: https://developer.mozilla.org/
  //
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  const st = JSON.stringify(webSocket, getCircularReplacer(), 2);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={!modalVisible}>
      <SafeAreaView>
        <Text style={styles.title}> {`Response from ${wss}`}</Text>
        <ScrollView style={styles.container}>
          <Text> {st}</Text>
        </ScrollView>
        <TouchableOpacity
          style={styles.singleButton}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.buttonText}>{'Close'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {margin: 20, height: '70%'},
  title: {margin: 20},
  buttonText: {color: 'white'},
  singleButton: {
    backgroundColor: '#4F93FE',
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

export default Connector;
