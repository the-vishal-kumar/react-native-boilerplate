/**
 * auth/actions.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import { SET_APP_LOADING, SET_TOKEN, SET_PROFILE } from './types';

export const setAppLoading = (payload) => ({ type: SET_APP_LOADING, payload });

export const setToken = (payload) => ({ type: SET_TOKEN, payload });

export const setProfile = (payload) => ({ type: SET_PROFILE, payload });
