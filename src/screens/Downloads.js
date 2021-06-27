import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, gStyle } from '../constants';

// components
import Header from '../components/Header';

// icons
import SvgBackground from '../components/icons/Svg.Background';
import SvgDownloads from '../components/icons/Svg.Downloads';

const Downloads = () => (
  <View style={gStyle.container}>
    <View style={gStyle.posAbsolute}>
      <SvgBackground />
    </View>

    <Header title="Downloads" />

    <View style={styles.containerContent}>
      <View style={styles.containerIcon}>
        <SvgDownloads fill={colors.profileBackground} size={48} />
      </View>

      <Text style={styles.heading}>You have no downloads</Text>

      <Text style={styles.description}>
        Movies and series you download will appear here.
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  containerIcon: {
    alignItems: 'center',
    borderColor: colors.profileBackground,
    borderRadius: 50,
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    marginBottom: 32,
    marginTop: 48,
    width: 100
  },
  heading: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    width: 300
  },
  description: {
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16,
    marginBottom: 48,
    textAlign: 'center',
    width: 300
  }
});

export default Downloads;
