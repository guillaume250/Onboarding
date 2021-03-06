import React from 'react';
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
import {theme} from '@onboarding/ui-kit';

const TimeLine = ({modalVisible, setModalVisible, timeline}) => {
  const {data, agent} = useData();
  const probes = data.slice(1);
  const {names, src} = agent;
  return (
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
          <Image style={styles.avatar} source={src} />
        </View>
        <ScrollView style={styles.container}>
          {probes.map((probe, i) => {
            const {answer} = timeline[i] || false;
            return (
              <View key={probe.id} style={styles.probe}>
                <View style={styles.onboarding}>
                  <Text style={styles.agentText}>{names.firstName}:</Text>
                  <Text style={styles.onboardingText}>{probe.question}</Text>
                </View>
                {answer && (
                  <View style={styles.onboarding}>
                    <Text style={styles.userText}>{'You'}:</Text>
                    <Text style={styles.onboardingText}>
                      {timeline[i]?.answer}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
        <View>
          <TouchableOpacity
            style={styles.singleButton}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>{'Close Timeline'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {height: '100%'},
  container: {marginLeft: 20, marginRight: 20, paddingTop: 20, height: '70%'},
  agent: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    borderBottomWidth: 0.1,
    borderBottomColor: theme.light,
    backgroundColor: theme.primeBg,
    shadowColor: theme.light,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 5,
    },
  },
  agentNames: {
    alignSelf: 'center',
    marginRight: 10,
    color: theme.snow,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  onboarding: {margin: 10},
  probe: {paddingBottom: 20},
  agentText: {color: theme.primeBg},
  userText: {color: theme.night},
  onboardingText: {color: theme.light},
  buttonText: {color: theme.secondaryButtonText},
  singleButton: {
    backgroundColor: theme.secondaryButton,
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
const mapStateToProps = (state) => {
  return {timeline: state.timeline};
};
export default connect(mapStateToProps)(TimeLine);
