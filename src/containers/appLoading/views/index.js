/**
 * appLoading/views/index.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import { styles } from '../styles';
import { Constants } from '../../../config';
const {
  BaseStyle: { colors: { chocolate } },
  Images: { Logo }
} = Constants;

export default () => (
  <View style={styles.container}>
    <Image source={Logo} />
    <ActivityIndicator size='large' color={chocolate} />
  </View>
);
