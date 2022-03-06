import { Title } from '@project/stories/src/components/atom/Title';
import React from 'react';
import styled from 'styled-components';

const Layout = ({ title, children }) => {
  return (
    <Wrapper>
      <header>
        <LayoutTitle>{title}</LayoutTitle>
      </header>
      {children}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0px 70px 0px;
  height: 100%;
`;

const LayoutTitle = styled(Title)`
  font-size: 24px;
  margin: 0px 36px;
  text-align: center;
`;
