import React from 'react';
import styled from 'styled-components';
import emptyBg from '../assets/images/input_background.svg';
import validBg from '../assets/images/valid_input_background.svg';

const Wrapper = styled.div`
  display: inline-block;
  width: 320px;
  height: 63px;
  background-image: ${({ value }) => (value ? `url(${validBg})` : `url(${emptyBg})`)};
  background-repeat: no-repeat;
`;

const StyledInput = styled.input`
  width: 290px;
  height: 30px;
  margin: 10px 17px;
  text-align: center;
  font-size: 18px;
  color: #000;
  outline: none;
  border: none;
  padding-bottom: 5px;
  background-color: ${({ value }) => (value ? '#fff27b' : '#fff')};

  ::placeholder {
    color: #a5a5a5;
  }
`;

function Input({ placeholder, name, onChange, value, ...rest }) {
  return (
    <Wrapper value={value ? true : false}>
      <StyledInput
        {...rest}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

export default Input;
