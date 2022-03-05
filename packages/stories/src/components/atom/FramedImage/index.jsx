import styled from "@emotion/styled";

const Image = styled.img`
  border: 1px solid black;
  padding: 3px;
`;

const FramedImage = ({ src, alt, restProps }) => {
  return <Image src={src} alt={alt} {...restProps} />;
};

export default FramedImage;
