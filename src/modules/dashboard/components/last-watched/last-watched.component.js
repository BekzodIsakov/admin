import { hoc } from '@utils/hoc';
import { Details } from './components/details/details.component';
import { Thumbnail } from './components/thumbnail/thumbnail.component';
import { useLastWatchedProps } from './last-watched.props';
import { StyledLastWatched } from './last-watched.styles';

export const LastWatched = hoc(
  useLastWatchedProps,
  ({ lastWatchVideo, handleSwitchLesson }) => {
    return (
      <StyledLastWatched>
        <Thumbnail
          src={lastWatchVideo?.lesson?.poster?.url}
          progress={lastWatchVideo?.progress}
          onClick={handleSwitchLesson}
        />
        <Details
          title={lastWatchVideo?.lesson?.title}
          description={lastWatchVideo?.lesson?.body}
          seconds={lastWatchVideo?.seconds}
        />
      </StyledLastWatched>
    );
  },
  'LastWatched'
);
