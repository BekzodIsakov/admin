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

export const LastNews = hoc(useNewsLastProps, ({ ...rest }) => {
  return (
    <LastNewsSpace {...rest}>
      <LastNewsContainer lastNewsBanner={''} href={``} target='_blank'>
        <LastNewsTitle data-testid='last-news-title'>{''}</LastNewsTitle>
        <LastNewsAuthorWrapper>
          <LastNewsAuthorImg src={''} alt={''} width={40} height={40} />
          <LastNewsBottomWrapper>
            <LastNewAuthorName data-testid='last-news-author'>
              {''}
            </LastNewAuthorName>
            <LastNewsDate data-testid='last-news-day'>{''}</LastNewsDate>
          </LastNewsBottomWrapper>
        </LastNewsAuthorWrapper>
      </LastNewsContainer>
    </LastNewsSpace>
  );
});
