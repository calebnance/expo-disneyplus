import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { colors } from '../../constants';

const SvgCategoryBackground = ({ height, width }) => (
  <Svg height={height} width={width}>
    <Defs>
      <LinearGradient id="a" x1="50%" y1="0%" x2="50%" y2="100%">
        <Stop stopColor={colors.categoryGradStart} offset="0" />
        <Stop stopColor={colors.categoryGradEnd} offset="100%" />
      </LinearGradient>
    </Defs>
    <Rect x="0" y="0" width="100%" height="100%" fill="url(#a)" />
  </Svg>
);

SvgCategoryBackground.defaultProps = {
  height: 24,
  width: 24
};

SvgCategoryBackground.propTypes = {
  // optional
  height: PropTypes.number,
  width: PropTypes.number
};

export default React.memo(SvgCategoryBackground);
