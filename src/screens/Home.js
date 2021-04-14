import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-navigation';
import { device, gStyle } from '../constants';

// components
import Categories from '../components/Categories';
import MediaItemScroller from '../components/MediaItemScroller';
import SlideShow from '../components/SlideShow';

// icons
import SvgBackground from '../components/icons/Svg.Background';
import SvgDisneyPlusLogo from '../components/icons/Svg.DisneyPlusLogo';

const Home = () => (
  <View style={gStyle.container}>
    <View style={gStyle.posAbsolute}>
      <SvgBackground />
    </View>

    <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
      <View style={styles.containerHeader}>
        <SvgDisneyPlusLogo />
      </View>

      <SlideShow />

      <Categories />

      <Text style={gStyle.heading}>Originals</Text>
      <MediaItemScroller dataset="originals" />

      <Text style={gStyle.heading}>Recommended For You</Text>
      <MediaItemScroller dataset="recommended" />

      <Text style={gStyle.heading}>Hit Movies</Text>
      <MediaItemScroller dataset="hits" />

      <Text style={gStyle.heading}>Trending</Text>
      <MediaItemScroller dataset="trending" />

      <Text style={gStyle.heading}>Out of the Vault</Text>
      <MediaItemScroller dataset="vault" />

      <Text style={gStyle.heading}>Ultra HD and HDR</Text>
      <MediaItemScroller dataset="hdr" />

      <View style={gStyle.spacer24} />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    marginBottom: 8,
    paddingTop: device.iPhoneNotch ? 36 : 6
  }
});

export default Home;
