import { useCallback, useEffect, useRef, useState } from 'react';
import { ShakaPlayerWatermark } from './shaka-player.style';
import reactDomServer from 'react-dom/server';
import { coursesActions, useActiveLessonSelector } from '@courses/store';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { VideoContext } from '@courses/routes/courses-single/course.context';
import { useUpdateVideo } from '@hooks/use-update-video';
import { styleKeysToCamelCase } from '@utils/style-keys-to-camel-case';
import uzLocaleJson from './localization.json';

const shaka = window.shaka;

const DRM_KEYS = {
  f3c5e0361e6654b28f8049c778b23947: 'a4631a153a443df9eed0593043db7517',
  abba271e8bcf552bbd2e86a434a9a5d7: '69eaa802a6763af979e8d1940fb88397',
  '6d76f25cb17f5e16b8eaef6bbf582d87': 'cb541084c99731aef4fff74500c12ea7'
};

const playerConfig = {
  seekBarColors: {
    base: 'rgba(255, 255, 255, 0.3)',
    buffered: 'rgba(255, 255, 255, 0.54)',
    played: '#ae8d5e'
  }
};

const LESSON_FINISHED_PROGRESS = 95;

// const licenseServer = 'https://widevine-proxy.appspot.com/proxy'
function randomPosition(include) {
  return Math.floor(Math.random() * include);
}

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

/**
 * <ShakaPlayer /> props
 */
export const useShakaPlayerProps = ({ src, watermark }) => {
  const dispatch = useDispatch();
  const timerRef = useRef(null);
  const activeLessonRef = useRef(null);
  const [ended, setEnded] = useState(false);
  const [renderedPlayer, setRenderedPlayer] = useState(null);
  const [loadError, setLoadError] = useState(true);
  const [showPrevNext, setShowPrevNext] = useState(false);
  const activeLesson = useActiveLessonSelector();
  const videoRef = useContext(VideoContext);
  const { updateVideoTime } = useUpdateVideo(videoRef);
  const [intervalTime, setIntervalTime] = useState(1000);
  const [showWatermark, setShowWatermark] = useState(false);

  const containerRef = useRef();

  const handleVideoFinished = () => {
    setEnded(true);
    clearInterval(timerRef.current);
  };

  const handleVideoPaused = () => {
    clearInterval(timerRef.current);
  };

  // eslint-disable-next-line
  const divideVideoDuration = useCallback(duration => {
    return (duration / 5) * 1000;
  });

  useEffect(() => {
    const { duration } = videoRef.current;

    if (duration) {
      setIntervalTime(divideVideoDuration(duration));
    }
  }, [videoRef.current?.duration]);

  useEffect(() => {
    const videoDurationInterval = Math.floor(intervalTime / 1000);

    const intervalId = setInterval(() => {
      const currentTime = Math.floor(videoRef.current?.currentTime);

      if (!ended) {
        if (videoDurationInterval === currentTime) {
          setShowWatermark(true);
        } else if (videoDurationInterval < currentTime) {
          if (currentTime % videoDurationInterval === 0) {
            setShowWatermark(true);
          }
        }
      }
    }, 1000);

    if (ended) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [intervalTime, ended]);

  const handleVideoStarted = () => {
    setEnded(false);

    timerRef.current = setInterval(() => {
      const percent =
        (videoRef.current?.currentTime * 100) / videoRef.current?.duration;
      dispatch(
        coursesActions.upsertLesson({
          course_id: activeLessonRef.current.course_id,
          chapter_id: activeLessonRef.current.chapter_id,
          lesson_id: activeLessonRef.current.id,
          progress:
            activeLessonRef.current.progress > LESSON_FINISHED_PROGRESS
              ? activeLessonRef.current.progress
              : Math.round(percent),
          seconds: Math.round(videoRef.current?.currentTime)
        })
      );
    }, 10000);
  };

  const onMouseEnter = () => {
    setShowPrevNext(true);
  };

  const onMouseLeave = () => {
    setShowPrevNext(false);
  };

  const handleSetActive = item => {
    dispatch(coursesActions.changeActiveCourse(item));
  };

  useEffect(() => {
    const video = videoRef.current;
    const videoContainer = containerRef.current;
    const player = new shaka.Player(video);

    const ui = new shaka.ui.Overlay(player, videoContainer, video);
    const l16n = ui.getControls().getLocalization();
    l16n
      .insert('uzb', new Map(Object.entries(uzLocaleJson)))
      .changeLocale(['uzb']);

    ui.configure(playerConfig);

    player.configure({
      drm: {
        // servers: { 'com.widevine.alpha': licenseServer },
        clearKeys: DRM_KEYS
      },
      streaming: {
        bufferingGoal: 120
      }
    });

    video.addEventListener('ended', handleVideoFinished);
    video.addEventListener('playing', handleVideoStarted);
    video.addEventListener('pause', handleVideoPaused);

    setRenderedPlayer(player);

    return () => {
      video.removeEventListener('ended', handleVideoFinished);
      video.removeEventListener('playing', handleVideoStarted);
      video.removeEventListener('pause', handleVideoPaused);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!src || !renderedPlayer) return;
    const video = videoRef.current;

    renderedPlayer
      .load(src)
      .then(() => {
        if (video) {
          video.currentTime = activeLesson?.seconds || 0;
          video.play();
          setLoadError(false);
        }
      })
      .catch(err => {
        setLoadError(err);

        setTimeout(() => {
          setLoadError(false);
        }, 7000);
      });
  }, [activeLesson?.seconds, renderedPlayer, src, videoRef]);

  useEffect(() => {
    const oldWatermark = containerRef?.current?.querySelector('#watermark');
    const styles = {
      display: 'inline',
      position: 'absolute !important',
      top: `${randomPosition(75)}% !important`,
      left: `${randomPosition(75)}% !important`,
      right: 'initial !important',
      bottom: 'initial !important',
      color: '#fff !important',
      'background-color': 'rgba(0, 0, 0, 0.2) !important',
      opacity: '0.5 !important',
      overflow: 'initial !important',
      visibility: 'initial !important',
      width: 'initial !important',
      height: 'initial !important',
      transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) !important',
      'text-indent': 'initial !important',
      'font-size': '1.5rem !important'
    };

    if (oldWatermark) {
      oldWatermark.remove();
    }

    if (showWatermark) {
      setTimeout(() => {
        setShowWatermark(false);
      }, 30000);

      if (oldWatermark) {
        const styleString = Object.keys(styles).reduce((acc, item) => {
          acc += `${item}:${styles[item]};`;
          return acc;
        }, '');
        oldWatermark.setAttribute('style', styleString);
        oldWatermark.innerHTML = watermark;
      } else {
        const updatedStyles = styleKeysToCamelCase(styles);

        const someComponent = reactDomServer.renderToString(
          <ShakaPlayerWatermark id='watermark' style={updatedStyles}>
            {watermark}
          </ShakaPlayerWatermark>
        );
        containerRef.current.insertAdjacentHTML('beforeend', someComponent);
      }
    }
  }, [showWatermark, watermark]);

  useEffect(() => {
    activeLessonRef.current = activeLesson;
  }, [activeLesson]);

  return {
    videoRef,
    containerRef,
    ended,
    loadError,
    onMouseLeave,
    onMouseEnter,
    showPrevNext,
    handleSetActive,
    updateVideoTime,
    isSafari
  };
};
