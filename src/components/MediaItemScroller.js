import * as React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { colors, images } from '../constants';

import mockData from '../mockdata/data';

const MediaItemScroller = ({ dataset }) => {
  const dataArray = Object.values(mockData[dataset]);

  return (
    <FlatList
      contentContainerStyle={styles.containerFlatList}
      data={dataArray}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {
        const renderItem = item.image ? (
          <Image source={images[item.image]} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        );

        return <View style={styles.item}>{renderItem}</View>;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

MediaItemScroller.defaultProps = {
  dataset: 'dumbData'
};

MediaItemScroller.propTypes = {
  // optional
  dataset: PropTypes.string
};

const styles = StyleSheet.create({
  containerFlatList: {
    paddingLeft: 16,
    paddingRight: 8
  },
  item: {
    borderRadius: 4,
    height: 130,
    marginRight: 8,
    overflow: 'hidden',
    width: 93
  },
  placeholder: {
    backgroundColor: colors.infoGrey,
    height: '100%',
    width: '100%'
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%'
  }
});

export default MediaItemScroller;
