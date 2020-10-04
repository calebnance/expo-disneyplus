import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgSearch = ({ active, fill, size }) => {
  let fillColor = fill;

  if (fillColor === null) {
    fillColor = active ? colors.white : colors.inactiveGrey;
  }

  return (
    <Svg height={size} width={size} viewBox="0 0 36 36">
      <Path
        d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 0 1 0 2.829l-.174.173a2 2 0 0 1-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 1 0 0-13.794 6.897 6.897 0 0 0 0 13.794z"
        fill={fillColor}
      />
    </Svg>
  );
};

SvgSearch.defaultProps = {
  active: true,
  fill: null,
  size: 32
};

SvgSearch.propTypes = {
  // optional
  active: PropTypes.bool,
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgSearch);
