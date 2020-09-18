import React, {useState} from 'react';
import {connect} from 'react-redux';

import {
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from 'react-native';
import {useData} from '@onboarding/hooks';
import {ConnectDoctor} from './';
const TimeLine = ({modalVisible, setModalVisible, timeline}) => {
  const {data, agent} = useData();
  const probes = data.slice(1);
  const {names, avatar} = agent;
  const [doctorModal, setdoctorModal] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={!modalVisible}
        style={styles.modal}>
        <SafeAreaView>
          <View style={styles.agent}>
            <Text
              style={
                styles.agentNames
              }>{`${names.firstName} ${names.lastName}`}</Text>
            <Image style={styles.avatar} source={{uri: avatar}} />
          </View>
          <ScrollView style={styles.container}>
            {probes.map((probe, i) => (
              <View key={probe.id} style={styles.probe}>
                <View style={styles.onboarding}>
                  <Text style={styles.agentText}>{names.firstName}:</Text>
                  <Text style={styles.onboardingText}>{probe.question}</Text>
                </View>
                <View style={styles.onboarding}>
                  <Text style={styles.userText}>{'You'}:</Text>
                  <Text style={styles.onboardingText}>
                    {timeline[i]?.answer}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.duoButtons}>
            <TouchableOpacity
              style={styles.duoButton}
              onPress={() => {
                setModalVisible(false);
                setdoctorModal(true);
              }}>
              <Text style={styles.buttonText}>{'Summon Doctor'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.duoButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>{'Close Timeline'}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
      <ConnectDoctor
        modalVisible={doctorModal}
        setModalVisible={setdoctorModal}
      />
    </>
  );
};
const styles = StyleSheet.create({
  modal: {height: '100%'},
  container: {marginLeft: 20, marginRight: 20, height: '70%'},
  agent: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    borderBottomWidth: 0.1,
    borderBottomColor: '#576272',
    backgroundColor: '#ECF5F6',
  },
  agentNames: {
    alignSelf: 'center',
    marginRight: 10,
    color: '#576272',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  onboarding: {margin: 10},
  duoButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  agentText: {color: '#4E88EE'},
  userText: {color: '#142948'},
  onboardingText: {color: '#65686E'},
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
  closeButton: {
    marginLeft: 100,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  footer: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    borderBottomWidth: 0.1,
    borderBottomColor: '#576272',
    backgroundColor: '#ECF5F6',
  },
});
const mapStateToProps = (state) => {
  return {timeline: state.timeline};
};
export default connect(mapStateToProps)(TimeLine);
