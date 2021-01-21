/**
 * appLoading/main.js
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppLoadingView from './views';

const Main = (props) => {
  const { setToken, setProfile, setAppLoading } = props;

  const rehydrate = async () => {
    try {
      const res = await AsyncStorage.multiGet(['Token', 'Profile']);
      if (res[0][1]) {
        setToken(res[0][1]);
      }
      if (res[1][1]) {
        setProfile(JSON.parse(res[1][1]));
      }
    } catch (e) {
    } finally {
      setAppLoading(false);
    }
  };

  useEffect(() => {
    rehydrate();
  }, []);

  return <AppLoadingView />;
};

export default Main;
