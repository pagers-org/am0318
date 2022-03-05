import styled from "@emotion/styled";
import defaultButton from "../../../assets/images/button-white.png";

const getBackgroundImage = (theme) => {
  switch (theme) {
    default:
      return defaultButton;
  }
};

const Wrapper = styled.button`
  background-color: transparent;
  background-image: url(${(theme) => getBackgroundImage(theme)});
  background-repeat: no-repeat;
  border: none;
  width: 236px;
  height: 63px;
  font-size: 18px;
  padding: 0 0 9px 0;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <Wrapper theme={props.theme} onClick={props.onClick}>
      {props.text}
    </Wrapper>
  );
};

export default Button;
