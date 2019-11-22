import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { gStyle } from '../constants';

// components
import Header from '../components/Header';

// icons
import SvgBackground from '../components/icons/Svg.Background';

const ProfileWatchlist = ({ navigation }) => (
  <View style={gStyle.container}>
    <View style={gStyle.posAbsolute}>
      <SvgBackground />
    </View>

    <Header showBack title="Watchlist" />
  </View>
);

ProfileWatchlist.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default ProfileWatchlist;
