import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgDownloads = ({ active, fill, size }) => {
  let fillColor = fill;

  if (fillColor === null) {
    fillColor = active ? colors.white : colors.inactiveGrey;
  }

  return (
    <Svg height={size} width={size} viewBox="0 0 20 20">
      <Path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" fill={fillColor} />
    </Svg>
  );
};

SvgDownloads.defaultProps = {
  active: true,
  fill: null,
  size: 24
};

SvgDownloads.propTypes = {
  // optional
  active: PropTypes.bool,
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgDownloads);
