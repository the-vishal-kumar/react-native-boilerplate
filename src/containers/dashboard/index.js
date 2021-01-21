/**
 * dashboard/index.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {
  setProfile as setProfileAction,
  setToken as setTokenAction,
} from '../../redux';

const Main = (props) => {
  const {setToken, setProfile} = props;

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, borderColor: 'red', borderWidth: 1}}>
      <Text>Dashboard</Text>
      <Button
        title="Logout"
        onPress={() => {
          setProfile({});
          setToken('');
        }}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setProfile: (profile) => dispatch(setProfileAction(profile)),
  setToken: (token) => dispatch(setTokenAction(token)),
});

export default connect(null, mapDispatchToProps)(Main);
