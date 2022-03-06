import styled from "styled-components";
import Template from "../../../assets/images/collection_background.svg";

/* eslint-disable */
const index = ({ children }) => {
  return <StorageTitle>{children}</StorageTitle>;
};

export default index;

export const StorageTitle = styled.h2`
  background-image: url(${Template});
  background-repeat: no-repeat;
  text-align: center;
  width: 305px;
  height: 68px;
  padding-top: 12px;
  margin: 28px 0 35px 0;
`;
