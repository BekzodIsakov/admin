import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';
import { LastNews } from './last-news.component';

const news = {
  title: {
    uz: 'Ohirgi yangilik'
  },
  banner: {
    url: 'https://via.placeholder.com/300x150'
  },
  thumbnail: {
    url: 'https://via.placeholder.com/40x40'
  },
  slug: 'ohirgi-yangilik',
  author: {
    uz: "O'zbekiston Respublikasi"
  }
};

const day = '12/12/2020';

const LAST_NEWS_PROPS = {
  latestNews: news,
  day,
  'data-testid': 'last-news-component'
};

describe('Common Context', () => {
  test('Should render LastNews component', async () => {
    const { asFragment } = customRender(<LastNews {...LAST_NEWS_PROPS} />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('last-news-component')).toBeInTheDocument();
    expect(screen.getByTestId('last-news-title')).toHaveTextContent(
      news.title.uz
    );
    expect(screen.getByTestId('last-news-author')).toHaveTextContent(
      news.author.uz
    );
    expect(screen.getByTestId('last-news-day')).toHaveTextContent(day);
  });
});
