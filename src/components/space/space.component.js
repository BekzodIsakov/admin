import React from 'react';
import { hoc } from '@utils/hoc';
import { useSpaceProps } from './space.props';
import { SpaceContainer } from './space.style';

/**
 * <Space />
 */
const Space = hoc(useSpaceProps, (props) => (
  <SpaceContainer {...props} />
));

export { Space };
