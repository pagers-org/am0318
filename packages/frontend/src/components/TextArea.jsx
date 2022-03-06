import React from 'react';
import styled from 'styled-components';
import Background from '@project/stories/src/assets/icon/textarea.svg';

const TextArea = ({ handleChange }) => {
  return (
    <>
      <StyledTextArea
        onChange={e => handleChange(e)}
        mid="description"
        name="description"
        rows="5"
        cols="33"
        maxLength="60"
        placeholder="따뜻한 말로 적어주상!"
      ></StyledTextArea>
    </>
  );
};
export default TextArea;

const StyledTextArea = styled.textarea`
  resize: none;
  border: none;
  margin: 10px 0;
  display: flex;
  background-image: ${`url(${Background})`};
  width: 318px;
  height: 200px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 16px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 20px 90px 0 30px;
  letter-spacing: 0.9;
  outline: none;
`;
