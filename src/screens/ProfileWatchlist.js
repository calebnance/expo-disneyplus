import * as React from 'react';
import { View } from 'react-native';
import { gStyle } from '../constants';

// components
import Header from '../components/Header';

// icons
import SvgBackground from '../components/icons/Svg.Background';

const ProfileWatchlist = () => (
  <View style={gStyle.container}>
    <View style={gStyle.posAbsolute}>
      <SvgBackground />
    </View>

    <Header showBack title="Watchlist" />
  </View>
);

export default ProfileWatchlist;
