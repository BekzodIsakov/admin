import { CourseLessonVideoPlayer, CourseLessonVideoPlayerNext, CourseLessonVideoPlayerPrev } from "./course-video-player.style"

import prevPlayerIcon from '../../../../../assets/img/prev-player.svg'
import nextPlayerIcon from '../../../../../assets/img/next-player.svg'

export const CourseVideoPlayer = () => {
  return(
    <CourseLessonVideoPlayer>
      <CourseLessonVideoPlayerPrev href="#">
        <img src={prevPlayerIcon} alt="prev play"width="20" height="20" />
      </CourseLessonVideoPlayerPrev>
      <CourseLessonVideoPlayerNext href="#">
        <img src={nextPlayerIcon} alt="prev play"width="20" height="20" />
        Keyingi dars
      </CourseLessonVideoPlayerNext>
    </CourseLessonVideoPlayer>
  )
}
