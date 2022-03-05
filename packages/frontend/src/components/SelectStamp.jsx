import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import Button from '@project/stories/src/components/atom/Button';
import { getImage, getStamp } from '../utils/GetSvg';
const SelectStamp = ({ handleClick, changeItems, selectedStamp }) => {
  const DESC_STAMP = [
    { title: 'GOOD LUCK', desc: '행운이 가득하다' },
    { title: 'SUPER!!!', desc: '뭐든지 잘할 수 있다' },
    { title: 'you are the best', desc: '세계 최고가 된다' },
    { title: 'cheer up', desc: ' 힘이 솟는다' },
    { title: 'love ya', desc: '사랑에 빠진다' },
    { title: 'don’t worry', desc: '걱정이 마법처럼 사라진다' },
  ];

  return (
    <Layout title={'도장을 찍고 완성하상!'}>
      <StyledStamp selected={getImage(selectedStamp)}>
        <div></div>
      </StyledStamp>
      <h4>{DESC_STAMP[selectedStamp]?.title}</h4>
      <span>{DESC_STAMP[selectedStamp]?.desc}</span>
      <StyledGrid>
        {DESC_STAMP.map((item, index) => {
          return (
            <div key={item.title + item.desc} onClick={() => changeItems(index, 'stickerId')}>
              <img src={getStamp(index)} />
            </div>
          );
        })}
      </StyledGrid>
      <Button theme="action" text="다음" onClick={handleClick} />
    </Layout>
  );
};

export default SelectStamp;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(2, 50px);
  grid-gap: 50px 30px;
  margin-bottom: 20px;
  div {
    cursor: pointer;
  }
`;
const StyledStamp = styled.div`
  min-width: 216px;
  min-height: 216px;
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-image: ${({ selected }) => `url(${selected})`};
  }
`;
