import { useProfileSelector } from '@store/common';

/**
 * <ProtectedRoute /> props
 */
export const useProtectedRouteProps = () => {
  const profile = useProfileSelector();
  return {
    profile
  };
};
