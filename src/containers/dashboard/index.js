/**
 * dashboard/index.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { setProfile, setToken } from '../../redux';

const Main = (props) => {
    const { setToken, setProfile } = props;

    return (
        <View style={{ flex: 1, borderColor: 'red', borderWidth: 1 }}>
            <Text>Dashboard</Text>
            <Button
                title='Logout'
                onPress={() => {
                    setProfile({});
                    setToken('');
                }}
            />
        </View>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setProfile: (profile) => dispatch(setProfile(profile)),
    setToken: (token) => dispatch(setToken(token)),
});

export default connect(null, mapDispatchToProps)(Main);
