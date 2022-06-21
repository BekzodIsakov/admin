import { useNewsLastProps } from './last-news.props';
import {
  LastNewAuthorName,
  LastNewsAuthorImg,
  LastNewsAuthorWrapper,
  LastNewsBottomWrapper,
  LastNewsContainer,
  LastNewsDate,
  LastNewsSpace,
  LastNewsTitle
} from './last-news.style';
import { hoc } from '@utils/hoc';
import { config } from 'src/config';

export const LastNews = hoc(
  useNewsLastProps,
  ({ latestNews, day, ...rest }) => {
    return (
      <LastNewsSpace {...rest}>
        <LastNewsContainer
          lastNewsBanner={latestNews?.banner?.url}
          href={`${config.landingUrl}/blog/${latestNews?.slug}`}
          target='_blank'
        >
          <LastNewsTitle data-testid='last-news-title'>
            {latestNews?.title?.uz}
          </LastNewsTitle>
          <LastNewsAuthorWrapper>
            <LastNewsAuthorImg
              src={latestNews?.thumbnail?.url}
              alt={latestNews?.title?.uz}
              width={40}
              height={40}
            />
            <LastNewsBottomWrapper>
              <LastNewAuthorName data-testid='last-news-author'>
                {latestNews?.author?.uz}
              </LastNewAuthorName>
              <LastNewsDate data-testid='last-news-day'>{day}</LastNewsDate>
            </LastNewsBottomWrapper>
          </LastNewsAuthorWrapper>
        </LastNewsContainer>
      </LastNewsSpace>
    );
  }
);
