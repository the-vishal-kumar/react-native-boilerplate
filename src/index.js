/**
 * src/index.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';

import AppNavigator from './navigators';

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
