/**
 * settings/actions.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import { SET_LANGUAGE } from './types';

export const setLanguage = (payload) => ({ type: SET_LANGUAGE, payload });
