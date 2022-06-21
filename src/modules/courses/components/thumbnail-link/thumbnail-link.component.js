import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  // StyledThumbnailLink,
  ThumbnailLinkContainer,
  Title,
  CancelBtn,
  CircularProgress,
  ValueContainer
} from './thumbnail-link.styles';
import { hoc } from '@utils/hoc';
// import studentDesktop from '../../../../assets/img/student-desk.png';
import { secondsFormat } from '@utils/date-format-time';
import PlayButton from '@assets/img/play-btn.svg';
import PauseButton from '@assets/img/pause-btn.png';

let progressEndValue = 100;
let speed = 50;

const useThumbnailProps = ({ item, onNext }) => {
  const time = useMemo(() => secondsFormat(item.seconds), [item.seconds]);
  const [btnImg, setBtnImg] = useState(true);
  const progressRef = useRef();
  const cancelBtn = useRef();

  const playBtnRef = useRef(null);

  useEffect(() => {
    let progressValue = 0;
    progressRef.current = setInterval(() => {
      if (playBtnRef.current) {
        progressValue++;
        playBtnRef.current.style.background = `conic-gradient(
                    #fff ${progressValue * 3.6}deg,
                    #6C7071 ${progressValue * 3.6}deg
                )`;
        if (progressValue === progressEndValue) {
          onNext();
          clearInterval(progressRef.current);
        }
      }
    }, speed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickCancelBtn = () => {
    clearInterval(progressRef.current);
    setBtnImg(false);
    cancelBtn.current.style.display = 'none';
    playBtnRef.current.style.background =
      'conic-gradient(rgb(255, 255, 255) 360deg, rgb(108, 112, 113) 360deg)';
  };

  const playNext = () => {
    onNext();
    clearInterval(progressRef.current);
  };

  return {
    time,
    playBtnRef,
    btnImg,
    handleClickCancelBtn,
    cancelBtn,
    playNext
  };
};

const ThumbnailLink = hoc(
  useThumbnailProps,
  ({
    item,
    time,
    btnImg,
    cancelBtn,
    playNext,
    handleClickCancelBtn,
    playBtnRef,
    ...rest
  }) => {
    return (
      <ThumbnailLinkContainer>
        <Title>Keyingi dars</Title>
        {/* <StyledThumbnailLink imgSrc={item?.poster?.url || studentDesktop}> */}
        <span>
          <div>
            {/* <h6>3-dars</h6> */}
            <h4>{item?.title}</h4>
            <CircularProgress ref={playBtnRef} onClick={playNext}>
              <ValueContainer
                src={btnImg ? PlayButton : PauseButton}
                alt='play'
              />
            </CircularProgress>
            <CancelBtn onClick={handleClickCancelBtn} ref={cancelBtn}>
              Bekor qilish
            </CancelBtn>
          </div>
        </span>
        {/* </StyledThumbnailLink> */}
      </ThumbnailLinkContainer>
    );
  },
  'ThumnailLink'
);

export default ThumbnailLink;
