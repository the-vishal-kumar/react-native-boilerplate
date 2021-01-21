/**
 * appLoading/styles.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import { StyleSheet } from 'react-native';

import { Constants } from '../../config';
const {
  BaseStyle: { colors: { white } }
} = Constants;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
