/**
 * settings/reducer.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import { SET_LANGUAGE } from './types';

const initialState = {
  language: 'EN',
};

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LANGUAGE:
      return { ...state, language: payload };
    default:
      return state;
  }
};

export default settingsReducer;
