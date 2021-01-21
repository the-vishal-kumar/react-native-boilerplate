/**
 * auth/reducer.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import { SET_APP_LOADING, SET_TOKEN, SET_PROFILE } from './types';

const initialState = {
  appLoading: true,
  token: '',
  profile: {},
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_APP_LOADING:
      return { ...state, appLoading: payload };
    case SET_PROFILE:
      return { ...state, profile: payload };
    case SET_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
};

export default authReducer;
