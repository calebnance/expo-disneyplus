import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgHome = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 36 36">
    <Path
      d="M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z"
      fill={active ? colors.white : colors.inactiveGrey}
    />
  </Svg>
);

SvgHome.defaultProps = {
  active: true,
  size: 32
};

SvgHome.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default React.memo(SvgHome);
