import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { gStyle } from '../constants';

// icons
import SvgBackground from '../components/icons/Svg.Background';

const Search = ({ navigation }) => (
  <View style={gStyle.container}>
    <View style={gStyle.posAbsolute}>
      <SvgBackground />
    </View>

    <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
      <View />
    </ScrollView>
  </View>
);

Search.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Search;
