import React from 'react';
import styled from 'styled-components';

const BottomButtonWrapper = ({ children, marginTop }) => {
  return <ButtonWrapper marginTop={marginTop}>{children}</ButtonWrapper>;
};

export default BottomButtonWrapper;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${({ marginTop }) => `${marginTop}px`};
`;
