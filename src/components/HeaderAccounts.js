import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { colors, device, fonts, gStyle, images } from '../constants';

// icons
import SvgPlus from './icons/Svg.Plus';

const ICON_SIZE = 74;

const HeaderAccounts = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.containerAccounts}>
      <View style={styles.containerUser}>
        <Image source={images.stormtrooper} style={styles.avatar} />
        <Text style={[styles.username, styles.usernameActive]}>Caleb</Text>
        <View style={styles.avatarActive} />
      </View>

      <View style={styles.containerUser}>
        <Image source={images.elsa} style={styles.avatar} />
        <Text style={styles.username}>Kim</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ModalAddProfile')}
        style={styles.containerUser}
      >
        <View style={styles.containerPlus}>
          <SvgPlus size={40} />
        </View>
        <Text style={styles.username}>Add Profile</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('ModalManageProfiles')}
      style={styles.containerEditProfiles}
    >
      <Text style={styles.editProfilesText}>Edit Profiles</Text>
    </TouchableOpacity>
  </View>
);

HeaderAccounts.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%'
  },
  containerAccounts: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
    paddingTop: device.iPhoneNotch ? 64 : 40,
    width: '100%'
  },
  containerUser: {
    alignItems: 'center',
    marginHorizontal: 10
  },
  avatar: {
    borderRadius: ICON_SIZE / 2,
    height: ICON_SIZE,
    marginBottom: 6,
    overflow: 'hidden',
    resizeMode: 'contain',
    width: ICON_SIZE
  },
  avatarActive: {
    ...gStyle.posAbsolute,
    borderColor: colors.white,
    borderRadius: ICON_SIZE / 2,
    borderWidth: 2,
    height: ICON_SIZE,
    width: ICON_SIZE
  },
  username: {
    color: colors.inactiveGrey,
    fontFamily: fonts.medium,
    fontSize: 12,
    marginTop: 4
  },
  usernameActive: {
    color: colors.white,
    fontFamily: fonts.bold
  },
  containerPlus: {
    alignItems: 'center',
    backgroundColor: colors.profileBackground,
    borderRadius: ICON_SIZE / 2,
    height: ICON_SIZE,
    justifyContent: 'center',
    marginBottom: 4,
    width: ICON_SIZE
  },
  containerEditProfiles: {
    alignItems: 'center',
    backgroundColor: colors.profileEditBackground,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24
  },
  editProfilesText: {
    color: colors.white,
    fontFamily: fonts.medium,
    paddingHorizontal: 16,
    paddingVertical: 8,
    textTransform: 'uppercase'
  }
});

export default withNavigation(HeaderAccounts);
