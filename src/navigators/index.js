/**
 * navigators/index.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { AppLoadingRoute, UnauthedRoutes, AuthedRoutes } from './routes';

const mapStateToProps = ({ auth }) => ({ auth });

const validateToken = (token) => (token ? true : false);

const AppNavigator = (props) => {
  const {
    auth: { appLoading, token }
  } = props;

  const isLoggedIn = validateToken(token);

  return appLoading ? <AppLoadingRoute {...props} /> : isLoggedIn ? <AuthedRoutes {...props} /> : <UnauthedRoutes />
};

export default connect(mapStateToProps)(AppNavigator);
