import React from 'react';
import {useData} from '@onboarding/hooks';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import {Card} from '../';
const ChatBox = ({probe}) => {
  const {question} = probe;
  const {agent} = useData();
  const {names, avatar} = agent;

  return (
    <Card>
      <View style={styles.agent}>
        <Text
          style={
            styles.agentNames
          }>{`${names.firstName} ${names.lastName}`}</Text>
        <Image style={styles.avatar} source={{uri: avatar}} />
      </View>
      <View style={styles.onboarding}>
        <Text style={styles.onboardingText}>{question}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  agent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '30%',
    padding: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#576272',
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
  onboarding: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
  },

  onboardingText: {
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
    fontSize: 24,
  },
});

export default ChatBox;
