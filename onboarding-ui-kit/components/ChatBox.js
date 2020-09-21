import React from 'react';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import {theme} from '../theme';

import Card from './Card';
import FadeInView from './FadeInView';

const ChatBox = ({probe, agent}) => {
  const {question} = probe;
  const {names, src} = agent;

  return (
    <Card>
      <View style={styles.agent}>
        <Text
          style={
            styles.agentNames
          }>{`${names.firstName} ${names.lastName}`}</Text>
        <Image style={styles.avatar} source={src} />
      </View>
      <FadeInView style={styles.onboarding} trigger={probe}>
        <Text style={styles.onboardingText}>{question}</Text>
      </FadeInView>
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
