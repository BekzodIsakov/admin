import { hoc } from '@utils/hoc';
import { Fragment } from 'react';
import { Comment } from './comment/comment.component';
import { useCourseCommentsProps } from './course-comments.props';
import { CourseCommentsContainer } from './course-comments.style';
import { Replies } from './replies';

export const CourseComments = hoc(
  useCourseCommentsProps,
  ({ items, depth, sort }) => {
    return (
      <CourseCommentsContainer>
        {items?.map((item, idx) => {
          return (
            <Fragment key={idx + depth}>
              <Comment item={item} />
              <Replies
                depth={depth}
                sort={sort}
                item={item}
                items={item?.replies || []}
              />
            </Fragment>
          );
        })}
      </CourseCommentsContainer>
    );
  }
);

CourseComments.defaultProps = {
  depth: 1
};
