import styled from 'styled-components';

const RightSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  min-width: 40.7rem;
  max-width: 40.7rem;
  padding: 2.4rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-family: 'ManropeSemiBold';
`;

export { RightSidebar, Title };
