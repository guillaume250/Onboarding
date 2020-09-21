import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {OnBoardingView} from '@onboarding/flow';
import {theme} from '@onboarding/ui-kit';

import {Provider} from 'react-redux';
import {store} from '@onboarding/redux';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: theme.primeBg}}>
        <OnBoardingView />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
