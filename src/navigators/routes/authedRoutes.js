/**
 * authedRoutes.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

import {DashboardScreen} from '../../containers';

import {Constants} from '../../config';
const {
  App: {
    routeNames: {DASHBOARD},
  },
} = Constants;

const AuthedRoutesStack = () => {
  return (
    <Navigator initialRouteName={DASHBOARD} headerMode="none" mode="card">
      <Screen name={DASHBOARD} component={DashboardScreen} />
    </Navigator>
  );
};

export default AuthedRoutesStack;
