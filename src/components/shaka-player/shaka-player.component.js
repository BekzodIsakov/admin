import React from 'react';
import { hoc } from '@utils/hoc';
import { useShakaPlayerProps } from './shaka-player.props';
import {
  ShakaPlayerContainer,
  ShakaPlayerVideo,
  ShakaButtonTheme,
  ShakaPlayerButtonWrapper,
  ShakaNextPrevButton,
  SafariIsNotSupported
} from './shaka-player.style';
import { SvgIcon } from '@components/atoms';
import { ErrorToast } from '@components/error-toast';
import ThumbnailLink from '@courses/components/thumbnail-link/thumbnail-link.component';
import { ErrorToastTitle } from '@components/error-toast/error-toast.style';
/**
 * <ShakaPlayer />
 */
export const ShakaPlayer = hoc(
  useShakaPlayerProps,
  ({
    poster,
    videoRef,
    containerRef,
    ended,
    next,
    prev,
    loadError,
    onMouseLeave,
    onMouseEnter,
    showPrevNext,
    handleSetActive,
    updateVideoTime,
    isSafari
  }) => (
    <ShakaPlayerContainer
      ref={containerRef}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      data-testid='shaka-player-container'
    >
      <ShakaPlayerVideo
        disablePictureInPicture
        ref={videoRef}
        poster={poster}
        blur={ended}
        className='video-player'
      />
      {isSafari && (
        <ErrorToast active={loadError}>
          <ErrorToastTitle>
            Iltimos{' '}
            <SafariIsNotSupported
              href='https://www.mozilla.org/en-US/firefox/new/'
              target='_blank'
            >
              FireFox
            </SafariIsNotSupported>{' '}
            yoki{' '}
            <SafariIsNotSupported
              href='https://www.google.com/chrome/'
              target='_blank'
            >
              Google Chromeda
            </SafariIsNotSupported>{' '}
            oching
          </ErrorToastTitle>
        </ErrorToast>
      )}

      {loadError && !isSafari && (
        <ErrorToast active={loadError} title="Videoni yuklab bo'lmadi" />
      )}

      {ended && next && (
        <ThumbnailLink
          item={next}
          onNext={handleSetActive.bind(null, next)}
          // onClick={handleSetActive.bind(null, next)}
        />
      )}
      {prev && showPrevNext && (
        <ShakaPlayerButtonWrapper left={true} onClick={updateVideoTime}>
          <ShakaNextPrevButton onClick={handleSetActive.bind(null, prev)}>
            <SvgIcon iconName='play_previous-icon' iconColor='#ffffff' />
          </ShakaNextPrevButton>
          <ShakaButtonTheme>{prev.title}</ShakaButtonTheme>
        </ShakaPlayerButtonWrapper>
      )}
      {next && showPrevNext && (
        <ShakaPlayerButtonWrapper right={true} onClick={updateVideoTime}>
          <ShakaButtonTheme>{next.title}</ShakaButtonTheme>
          <ShakaNextPrevButton onClick={handleSetActive.bind(null, next)}>
            <SvgIcon iconName='play_next-icon' iconColor='#ffffff' />
          </ShakaNextPrevButton>
        </ShakaPlayerButtonWrapper>
      )}
    </ShakaPlayerContainer>
  ),
  'ShakaPlayer'
);
