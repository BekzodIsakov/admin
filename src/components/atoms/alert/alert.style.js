import styled from 'styled-components';

const variants = {
  danger: {
    light: 'rgba(255, 0, 0, 0.5)',
    normal: 'rgba(255, 0, 0, 1)'
  },
  success: {
    light: 'rgba(0, 255, 0, 0.5)',
    normal: 'rgba(0, 255, 0, 1)'
  }
};

export const AlertContainer = styled.div`
  padding: 10px 15px;
  color: #ffffff;
  border: 1px solid transparent;
  border-color: ${props => variants[props.variant].normal};
  background-color: ${props => variants[props.variant].light};
  border-radius: 15px;
  margin-bottom: 15px;
`;
