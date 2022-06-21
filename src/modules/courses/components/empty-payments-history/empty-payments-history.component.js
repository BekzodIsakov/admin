import { hoc } from '@utils/hoc';
import { Heading } from '@components/atoms';
import {
  EmptyPaymentsHistoryBase,
  Description,
  Link
} from './empty-payments-history.styles';
import { SvgIcon } from '@components/atoms';
import { FlexWrapper } from '@components/layouts/flex-wrapper';

const useEmptyPaymentsHistoryProps = () => {};

export const EmptyPaymentsHistory = hoc(
  useEmptyPaymentsHistoryProps,
  () => {
    return (
      <EmptyPaymentsHistoryBase>
        <FlexWrapper
          direction='column'
          align='flex-start'
          justify='space-between'
          height='fill'
        >
          <div>
            <Heading>Sizning to'lovlaringiz</Heading>
            <Description>
              Kurs sotib olinmaganligi uchun sizda to’lov tarixi shakllanmagan.
            </Description>
          </div>
          <Link to='/courses'>
            <span>Kurslarni tanlash</span>
            <SvgIcon
              $stroke='a'
              iconName={'arrow_right-icon'}
              size='10px'
              iconColor='white'
            />
          </Link>
        </FlexWrapper>
      </EmptyPaymentsHistoryBase>
    );
  },
  'EmptyPaymentsHistory'
);
