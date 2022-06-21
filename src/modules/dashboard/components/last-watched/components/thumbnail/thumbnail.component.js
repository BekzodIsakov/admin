import React from 'react';
import {
  PlayButtonLink,
  Progress,
  ProgressBar,
  StyledThumbnail,
  StyledThumbnailWrapper
} from './thumbnail.styles';
import { SvgIcon } from '@components/atoms/index';
import { hoc } from '@utils/hoc';

const useThumbnailProps = () => {};

export const Thumbnail = hoc(
  useThumbnailProps,
  ({ src, onClick, progress }) => {
    return (
      <StyledThumbnailWrapper>
        <StyledThumbnail backgroundImg={src} onClick={onClick}>
          <PlayButtonLink alt='video link'>
            <SvgIcon iconName='play-fill-icon' iconColor='#ffffff' />
          </PlayButtonLink>
        </StyledThumbnail>
        <ProgressBar>
          <Progress progressPercentage={progress} />
        </ProgressBar>
      </StyledThumbnailWrapper>
    );
  }
);
