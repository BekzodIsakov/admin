import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';
import { Loading } from './loading.component';

test('Should render Loading component', () => {
  const { asFragment } = customRender(<Loading />);

  expect(asFragment()).toMatchSnapshot();
});

test('Loading component should have title and description', () => {
  customRender(<Loading />);
  const loaderTitle = screen.getByTestId('loader-title');

  expect(loaderTitle.innerHTML).toBe(
    `“Najot Ta’lim”ga xush kelibsiz. <br>Sahifa yuklanyapti, uzoq kutib qolmaysiz.`
  );
});
