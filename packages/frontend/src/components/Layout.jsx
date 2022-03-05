import Title from 'packages/stories/src/components/atom/Title';
import React from 'react';
import styled from 'styled-components';

const Layout = ({ title }) => {
  return (
    <Wrapper>
      <LayoutTitle>{title}</LayoutTitle>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.main`
  margin: 24px 0px 70px 0px;
`;

const LayoutTitle = styled(Title)`
  margin: 0px 36px;
`;
