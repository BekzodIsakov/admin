import { hoc } from '@utils/hoc';
import { MainLayout } from '@components/layouts/main-layout';

const useDashboardProps = () => {};

export const Dashboard = hoc(
  useDashboardProps,
  () => {
    return (
      <>
        <MainLayout rightSidebar={<>Dashboard sidebar</>}>Dashboard</MainLayout>
      </>
    );
  },
  'Dashboard'
);
