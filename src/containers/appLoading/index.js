/**
 * appLoading/index.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import Main from './main';

import {connect} from 'react-redux';
import {setAppLoading, setProfile, setToken} from '../../redux';

const mapDispatchToProps = (dispatch) => ({
  setAppLoading: (loading) => dispatch(setAppLoading(loading)),
  setProfile: (profile) => dispatch(setProfile(profile)),
  setToken: (token) => dispatch(setToken(token)),
});

export default connect(null, mapDispatchToProps)(Main);
