import React from 'react';
import PropTypes from 'prop-types';

import { SVG } from './svg-icon.styles';
import sprite from './sprite.svg';

export const SvgIcon = ({ iconName, ...rest }) => {
  return (
    <SVG {...rest}>
      <use xlinkHref={`${sprite}#${iconName}`} />
    </SVG>
  );
};

SvgIcon.propTypes = {
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};
