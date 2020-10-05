import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors, device, images } from '../constants';

// icons
import SvgCategoryBackground from './icons/Svg.CategoryBackground';

// data
const categoriesData = [
  { id: 1, image: 'logoDisney' },
  { id: 2, image: 'logoPixar' },
  { id: 3, image: 'logoMarvel' },
  { id: 4, image: 'logoStarWars' },
  { id: 5, image: 'logoNatGeo' }
];

const Categories = () => {
  const { length } = categoriesData;
  const bgWidth = Math.ceil((device.width - 16 - length * 18) / length);

  return (
    <View style={styles.container}>
      {categoriesData.map((item) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item.id}
            onPress={() => null}
            style={[styles.containerBlock, { height: bgWidth }]}
          >
            <View style={styles.containerBlockBackground}>
              <SvgCategoryBackground height={bgWidth - 2} width={bgWidth} />
            </View>
            <Image source={images[item.image]} style={styles.image} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingLeft: 16,
    paddingTop: 24
  },
  containerBlock: {
    alignItems: 'center',
    borderColor: colors.categoryBorder,
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    marginRight: 16
  },
  containerBlockBackground: {
    borderRadius: 2,
    overflow: 'hidden',
    position: 'absolute'
  },
  image: {
    height: 36,
    width: 64
  }
});

export default Categories;
