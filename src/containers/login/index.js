/**
 * login/index.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import {View, Text, Button} from 'react-native';
import {Constants} from '../../config';
const {
  App: {
    routeNames: {OTP},
  },
} = Constants;

const Main = (props) => {
  const {
    navigation: {navigate},
  } = props;

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, borderColor: 'red', borderWidth: 1}}>
      <Text>Login</Text>
      <Button
        title="Go to Otp"
        onPress={() => {
          navigate(OTP);
        }}
      />
    </View>
  );
};

export default Main;
