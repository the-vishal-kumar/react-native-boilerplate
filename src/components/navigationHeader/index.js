/**
 * navigationHeader/index.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { styles } from './styles';
import { Constants } from '../../config';
const {
  App: { colors: { black } },
} = Constants;


const HeaderButton = (props) => {
  const {
    containerStyle = {},
    showLeftButton = true,
    onLeftPress = () => null,
    leftButtonStyle = {},
    leftIconName = 'chevron-back',
    leftIconStyle = {},
    leftIconColor = black,
    multilineTitle = false,
    wishContainerStyle = {},
    titleStyle = {},
    titleStyle2 = {},
    title = '',
    title2 = '',
    showRightButton = true,
    onRightPress = () => null,
    rightButtonStyle = {},
    rightIconName = 'bell-alt',
    rightIconStyle = {},
    rightIconColor = black,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      {showLeftButton && (
        <TouchableOpacity
          onPress={onLeftPress}
          style={[styles.leftButton, leftButtonStyle]}>
          <Ionicons
            name={leftIconName}
            style={[styles.leftIcon, leftIconStyle]}
            color={leftIconColor}
          />
        </TouchableOpacity>
      )}

      {multilineTitle ? (
        <View style={[styles.wishContainer, wishContainerStyle]}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Text style={[styles.title, titleStyle2]}>{title2}</Text>
        </View>
      ) : (
          <View style={[styles.wishContainer, wishContainerStyle]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          </View>
        )}
      {showRightButton && (
        <TouchableOpacity
          onPress={onRightPress}
          style={[styles.rightButton, rightButtonStyle]}>
          <Fontisto
            name={rightIconName}
            style={[styles.rightIcon, rightIconStyle]}
            color={rightIconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderButton;
