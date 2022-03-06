import React from 'react';
import Layout from '../components/Layout';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '@project/stories/src/components/atom/Button';
import styled from 'styled-components';
const AwardContents = ({ handleInput, handleNextButton }) => {
  return (
    <Layout title={'상장을 주고 싶은 이유를적어보상!'}>
      <BoxWrapper>
        <h4>상장 이름(최대 10자)</h4>
        <Input
          placeholder={'ex. 친절한 어른상'}
          name={'title'}
          handleInput={handleInput}
          onChange={e => handleInput(e)}
        />
        <h4>상장 내용</h4>
        <TextArea handleChange={handleInput} />
      </BoxWrapper>
      <Button theme="action" text="다음" onClick={() => handleNextButton()} />
    </Layout>
  );
};
export default AwardContents;
const BoxWrapper = styled.div`
  height: 100%;
  margin-top: 24px;
  margin-bottom: 50px;
`;
