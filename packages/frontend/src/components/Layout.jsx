import { Title } from '@project/stories/src/components/atom/Title';
import React from 'react';
import styled from 'styled-components';

/**
 * @param {string[]} title: 문자열 배열로 받고, 배열 인덱스 단위는 줄넘김입니다.
 * @param {ReactNode} children
 */

const Layout = ({ title, children }) => {
  return (
    <Wrapper>
      <header>
        <LayoutTitle>
          {title?.map((text, index) => (
            <p key={index} style={{ margin: 0 }}>
              {text}
              {index !== title.length - 1 && <br />}
            </p>
          ))}
        </LayoutTitle>
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
  line-height: 41px;
  margin: 0px 36px;
  text-align: center;
`;
