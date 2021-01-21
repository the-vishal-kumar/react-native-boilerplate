/**
 * unauthedRoutes.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import { LoginScreen, OtpScreen } from '../../containers';

import { Constants } from '../../config';
const {
  App: { routeNames: { LOGIN, OTP } },
} = Constants;

const UnauthedRoutesStack = () => {
  return (
    <Navigator initialRouteName={LOGIN} headerMode='none' mode='card'>
      <Screen name={LOGIN} component={LoginScreen} />
      <Screen name={OTP} component={OtpScreen} />
    </Navigator>
  );
};

export default UnauthedRoutesStack;
