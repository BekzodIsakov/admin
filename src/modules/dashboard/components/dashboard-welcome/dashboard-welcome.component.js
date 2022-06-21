import { Button } from '@components/atoms/index';
import { config } from '@config/config';
import { useProfileSelector } from '@store/common';
import { hoc } from '@utils/hoc';
import {
  DashboardWelcomeContainer,
  DashboardWelcomeDesc,
  DashboardWelcomeParagraph
} from './dashboard-welcome.style';

const useDashboardProps = () => {
  const profile = useProfileSelector();

  return {
    profile
  };
};

export const DashboardWelcome = hoc(useDashboardProps, ({ profile }) => {
  return (
    <DashboardWelcomeContainer data-testid='dashboard-welcome'>
      <DashboardWelcomeParagraph>
        Assalomu alaykum, {profile.name}. <br /> "Najot ta'lim" onlayn
        platformasiga xush kelibsiz!
      </DashboardWelcomeParagraph>
      <DashboardWelcomeDesc>
        Dunyoda ilmdan boshqa najot yo'q va bo'lmagay. <br />
        <br />
        -Imom Buxoriy
      </DashboardWelcomeDesc>
      <Button
        buttonType='button'
        iconName='arrow_right-icon'
        $stroke
        style={{ backgroundColor: '#7AD111' }}
        onClick={() => (window.location.href = config.landingUrl + '/courses')}
      >
        Kursni tanlang
      </Button>
    </DashboardWelcomeContainer>
  );
});
