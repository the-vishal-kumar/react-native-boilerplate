/**
 * appLoadingRoute.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import { AppLoadingScreen } from '../../containers';

import { Constants } from '../../config';
const {
  App: { routeNames: { APP_LOADING } }
} = Constants;

const AppLoadingStack = () => {
  return (
    <Navigator initialRouteName={APP_LOADING} headerMode='none' mode='card'>
      <Screen name={APP_LOADING} component={AppLoadingScreen} />
    </Navigator>
  );
};

export default AppLoadingStack;
