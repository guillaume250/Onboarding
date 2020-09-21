import React from 'react';
import {connect} from 'react-redux';
import {Header, ChatBox, Container} from '@onboarding/ui-kit';
import {useData} from '@onboarding/hooks';
import UserInputView from './UserInputView';

const OnBoardingView = ({currentPath, timeline}) => {
  const {probe, agent} = useData();
  return (
    <Container>
      <Header />
      <ChatBox probe={probe(currentPath)} agent={agent} />
      <UserInputView probe={probe(currentPath)} tl={timeline} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {currentPath: state.currentPath, timeline: state.timeline};
};
export default connect(mapStateToProps)(OnBoardingView);
