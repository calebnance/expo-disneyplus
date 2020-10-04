import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { colors, images } from '../constants';

import navigationOptions from './defaultOptions';

// screens
import Profile from '../screens/Profile';
import ProfileAppSettings from '../screens/ProfileAppSettings';
import ProfileWatchlist from '../screens/ProfileWatchlist';

const Icon = ({ focused }) => {
  const borderColor = focused ? { borderColor: colors.white } : {};

  return (
    <View style={[styles.containerProfile, borderColor]}>
      <Image source={images.stormtrooper} style={styles.avatar} />
    </View>
  );
};

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions
    },
    ProfileAppSettings,
    ProfileWatchlist
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: Icon
    }
  }
);

const styles = StyleSheet.create({
  containerProfile: {
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: 20,
    borderWidth: 2,
    height: 40,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 40
  },
  avatar: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%'
  }
});
