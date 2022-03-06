import styled from '@emotion/styled';
import defaultButton from '../../../assets/images/button-white.svg';
import actionButton from '../../../assets/images/button-yellow.svg';
import disabledButton from '../../../assets/images/button-gray.svg';

const getBackgroundImage = (theme) => {
  switch (theme) {
    case 'action':
      return actionButton;
    case 'disabled':
      return disabledButton;
    default:
      return defaultButton;
  }
};

const StyledButton = styled.button`
  background-color: transparent;
  background-image: url(${({ theme }) => getBackgroundImage(theme)});
  background-repeat: no-repeat;
  border: none;
  width: 236px;
  height: 63px;
  font-size: 18px;
  padding: 0 0 9px 0;
  color: ${({ theme }) => (theme === 'disabled' ? '#A5A5A5' : 'black')};

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <StyledButton
      theme={props.theme}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;
