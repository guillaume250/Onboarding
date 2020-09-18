import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {OnBoardingView} from '@onboarding/flow';
import {Provider} from 'react-redux';
import {store} from '@onboarding/redux';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <OnBoardingView />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
