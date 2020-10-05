import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { gStyle } from '../constants';

// icons
import SvgBackground from '../components/icons/Svg.Background';

const Search = () => (
  <View style={gStyle.container}>
    <View style={gStyle.posAbsolute}>
      <SvgBackground />
    </View>

    <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
      <View />
    </ScrollView>
  </View>
);

export default Search;
