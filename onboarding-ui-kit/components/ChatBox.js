import React from 'react';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import {useData} from '@onboarding/hooks';
import {theme} from '../theme';

import Card from './Card';
const ChatBox = ({probe}) => {
  const {question} = probe;
  const {agent} = useData();
  const {names, avatar, src} = agent;

  return (
    <Card>
      <View style={styles.agent}>
        <Text
          style={
            styles.agentNames
          }>{`${names.firstName} ${names.lastName}`}</Text>
        <Image style={styles.avatar} source={src} />
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
    borderBottomColor: theme.lite,
  },
  agentNames: {
    alignSelf: 'center',
    marginRight: 10,
    color: theme.light,
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
    color: theme.secondaryButtonText,
  },
});

export default ChatBox;
